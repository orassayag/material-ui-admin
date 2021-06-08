import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';
import './Header.scss';

const Header = () => {

    return (
        <AppBar
            className="header-container"
            position="static"
            color="inherit"
        >
            <Toolbar>
                <Grid
                    container
                    alignItems="center"
                >
                    <Grid
                        item
                        className="item-1">
                        <InputBase
                            className="search-input"
                            placeholder="Search topics"
                            startAdornment={
                                <SearchIcon
                                    fontSize="small"
                                />}
                        />
                    </Grid>
                    <Grid
                        item
                        sm
                    >
                    </Grid>
                    <Grid
                        item
                        className="item-2"
                    >
                        <IconButton>
                            <Badge
                                className="notifications"
                                badgeContent={4}
                                color="secondary"
                            >
                                <NotificationsIcon
                                    fontSize="small"
                                />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge
                                className="alarms"
                                badgeContent={4}
                                color="primary"
                            >
                                <ChatBubbleOutlineIcon
                                    fontSize="small"
                                />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNewIcon
                                fontSize="small"
                            />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;