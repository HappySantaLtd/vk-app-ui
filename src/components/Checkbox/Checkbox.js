import React, {Component} from 'react'
import PropTypes from 'prop-types'
import css from './Checkbox.scss'
import {createClassName, isMobile} from "../../tools"

export default class Checkbox extends Component {
	render() {
		const {className: baseClassName, children, ...restProps} = this.props

		const className = createClassName({
			[css['Checkbox']]: true,
			[baseClassName ? ` ${baseClassName}` : '']: true,
			[css['Checkbox--mobile']]: isMobile(this.props)
		})

		const rp = {...restProps}
		delete rp.className
		delete rp.mobile
		return <label className={className}>
			<input type="checkbox" className={css["Checkbox__input"]} {...rp} />
			<span className={css["Checkbox__text"]}>{children}</span>
		</label>
	}
}

Checkbox.propTypes = {
	checked: PropTypes.bool,
	onChange: PropTypes.func,
	className: PropTypes.string,
	mobile: PropTypes.bool
}

Checkbox.defaultProps = {
	onChange: () => {}
}