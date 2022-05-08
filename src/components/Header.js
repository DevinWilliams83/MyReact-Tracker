import Button  from './Button'
const Header = () => {

        const onClick = () => {
            console.log('Click')
        }

    return (
       <header className='header'>
           <h1 style={headingStyle}>Task Tracker</h1>
           <Button color='grey' text='Add'  onClick= {onClick} / >

       </header>
    )
}


const headingStyle = {
   color: 'coral'
}

export default Header
