import PropTypes from 'prop-types'

const Button = ({color, text}) => {
    const onClick = () => {
        console.log('button pressed')
    }

    return (
        <button
        onClick={onClick}
        style={{backgroundColor: color }}
        className='btn'>{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

//impt pour importer les PropTypes
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button
