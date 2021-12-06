import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LayersIcon from '@material-ui/icons/Layers';
import menus from '../../constants/menu';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import FeedIcon from '@material-ui/icons/RssFeedSharp';


export default function MainListItems({ handleMenu }) {
  return (
    
    <div>
      <ListItem button onClick={() => handleMenu(menus.COURSES)}>
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText primary="Cursos" />
      </ListItem>
      <ListItem button onClick={() => handleMenu(menus.POSTS)}>
        <ListItemIcon>
          <FeedIcon />
        </ListItemIcon>
        <ListItemText primary="Posts" />
      </ListItem>
      <ListItem button onClick={() => handleMenu(menus.ABOUT)}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Sobre" />
      </ListItem>
    </div>
  );
}
