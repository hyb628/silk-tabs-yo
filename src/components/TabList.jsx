/**
 * @file TabList.jsx
 * @author yibin.huang@qunar.com
 *
 * tabs组件
 * 基于yo3组件的scroller进行修改
 */
import React, { PureComponent, PropTypes } from 'react';
import classNames from 'classnames';
import Tab from './Tab';
import Scroller from 'yo3/component/scroller';

const docWidth = document.documentElement.clientWidth;

class TabList extends PureComponent {

    static propTypes = {
        onChange: PropTypes.func,
        tabs: PropTypes.arrayOf(PropTypes.node),
        index: PropTypes.number,
        style: PropTypes.object // eslint-disable-line react/forbid-prop-types
    }

    static defaultProps = {
        index: 0,
        style: {}
    }

    constructor(props) {
        super(props);
        this.totalWidth = 0;
        this.isOnTap = false;
        this.tabWidths = []; // 记录每个tab的宽度
        this.handleTabClick = this.handleTabClick.bind(this);
        this.updateTabWidth = this.updateTabWidth.bind(this);
    }

    componentDidMount() {
        this.handlePosition(this.props.index);
    }

    // 手势左右切换 触发的更新
    componentWillUpdate(nextProps) {
        const index = nextProps.index;
        this.refScroller && this.handlePosition(index);
    }

    handleTabClick(index) {
        this.handlePosition(index);
        // 触发下面Slider滚动到第几个
        this.props.onChange(index);
    }

    updateTabWidth(index, width) {
        this.totalWidth = this.tabWidths[index] ?
            (this.totalWidth - this.tabWidths[index]) + width : this.totalWidth + width
        this.tabWidths[index] = width;
    }

    handlePosition(index) {
        let start = 0;

        // 计算offsetX
        for (let i = 0; i < index; i++) {
            start += this.tabWidths[i];
        }

        // 底部选中border
        this.inkBar.style.cssText = `
            -webkit-transform: translate3d(${start + 6}px, 0px, 0px);
            transform: translate3d(${start + 6}px, 0px, 0px);
            width:${this.tabWidths[index] - 12}px
        `;

        // setTimeout 解决首次横向滚动 滚不了的问题
        setTimeout(() => {
            let viewportHalfWidth = docWidth / 2,   //屏幕的一半
                halfWidth = this.tabWidths[index] / 2,  //当前项的一半
                maxScrollX = this.refScroller && this.refScroller.maxScrollX,   // 最大可滚动的距离
                scrollX = this.refScroller.x;

            if (start + halfWidth > viewportHalfWidth) {
                let posi = Math.floor(start + halfWidth - viewportHalfWidth);
                this.refScroller && this.refScroller.scrollTo(-posi < maxScrollX ? maxScrollX : -posi, 0, 500);
            } else {
                this.refScroller && this.refScroller.scrollTo(0, 0, 300);
            }
        }, 0)
    }

    render() {
        const {
            tabs,
            style
        } = this.props;

        return (
            <Scroller
                ref={ref => { this.refScroller = ref }}
                scrollX={true}
                scrollY={false}
                disabled={false}
                extraClass={'flex'}
                containerExtraStyle={{
                    width: this.totalWidth > docWidth ? this.totalWidth : docWidth
                }}
            >
                <div
                    style={style}
                    className="silk-tabs-nav-wrapper"
                >
                    <div className="silk-tabs-nav-scroller silk-tabs-border-line">
                        <div className="silk-tabs-ink-bar silk-tabs-ink-bar-animated" ref={ref => { this.inkBar = ref }} />
                        {
                            tabs.map((item, index) => {
                                const tabClass = classNames('silk-tabs-tab', {
                                    'silk-tabs-active': index === this.props.index
                                })
                                return (
                                    <Tab
                                        key={index}
                                        index={index}
                                        className={tabClass}
                                        onTap={this.handleTabClick}
                                        content={item}
                                        updateTabWidth={this.updateTabWidth}
                                    />
                                )
                            })
                        }
                    </div>
                </div>

            </Scroller>
        );
    }
}

export default TabList;
