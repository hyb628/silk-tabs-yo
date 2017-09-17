/**
 * Tab组件
 */
import React, { PureComponent, PropTypes } from 'react';
import Scroller from 'yo3/component/scroller';
import Touchable from 'yo3/component/touchable';

class Tab extends PureComponent {
    static propTypes = {
        onTap: PropTypes.func,
        updateTabWidth: PropTypes.func,
        content: PropTypes.node,
        index: PropTypes.number,
        className: PropTypes.string
    }

    componentDidMount() {
        this.props.updateTabWidth(this.props.index, this.el.offsetWidth)
    }

    render() {
        const {
            index,
            onTap,
            className,
            content
        } = this.props;

        return (
            <Touchable
                touchClass="g-touchable-opacity"
                onTap={() => onTap(index)}
            >
                <div
                    // onClick={() => onClick(index)}
                    ref={ref => { this.el = ref }}
                    className={className}
                >
                    {content}
                </div>
            </Touchable>
        )
    }
}

export default Tab;
