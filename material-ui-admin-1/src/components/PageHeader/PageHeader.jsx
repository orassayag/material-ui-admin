import { Card, Paper, Typography } from '@material-ui/core';
import './PageHeader.scss';

const PageHeader = ({ title, subtitle, icon }) => {
    
    return (
        <Paper
            className="pager"
            square
            elevation={0}
        >
            <div className="page-header">
                <Card
                    className="page-icon"
                >
                    {icon}
                </Card>
                <div className="page-title">
                    <Typography
                        variant="h6"
                        component="div"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        component="div"
                    >
                        {subtitle}
                    </Typography>
                </div>
            </div>
        </Paper>
    );
};

export default PageHeader;