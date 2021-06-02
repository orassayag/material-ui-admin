import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import './Header.scss';

const Header = () => {

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container>
                    <Grid item className="item-1">
                        <InputBase />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item className="item-2">
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={4} color="primary">
                                <ChatBubbleOutlineIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNewIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;