import React from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Container from '@material-ui/core/Container';
import { useStyles } from './styles';
import image from '../../assets/image.jpg';


const itemData = [
     {
       img: image,
       title: 'Image',
       author: 'author',
     },
     {
      img: image,
      title: 'Image',
      author: 'author',
     },

     {
      img: image,
      title: 'Image',
      author: 'author',
     },

     {
      img: image,
      title: 'Image',
      author: 'author',
     },

     {
      img: image,
      title: 'Image',
      author: 'author',
     },
   ];

export default function Posts() {
  const classes = useStyles();
  return (
    
    <Container maxWidth="lg" className={classes.container}>
      <ImageList rowHeight={180} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}
