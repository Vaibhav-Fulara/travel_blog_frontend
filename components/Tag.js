const Tag = ({title}) => {
    const getColor = () => {
        let color
        switch (title) {
            case 'travel':
                color = 'rgb(210,138,138)'
                break;
            case 'food':
                color= 'rgb(169,210,138)'
                break;
            case 'Family & Friends':
                color= 'rgb(138,173,138'
                break;
            case 'Life\'s Good':
                color= 'orange'
                break;
            default:
                color = 'rgb(129,138,218)'
                
        }
        return color
    }
    return (
        <div style={{backgroundColor: getColor()}} className="tag">{title}</div>
    )
}

export default Tag