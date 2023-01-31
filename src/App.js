import classes from './index.module.scss';
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Drawer from "./components/drawer/Drawer";

function App(props) {
    return (
        <div className={classes.wrapper}>
            <div>
                <Drawer/>
            </div>
            <div>
                <Header/>
            </div>
            <div>
                <Content/>
            </div>
        </div>
    );
}

export default App;
