import React, { useEffect, useState } from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Container from '@material-ui/core/Container';
import { useStyles } from './styles';
import Modal from '@material-ui/core/Modal';
import { get } from '../../services/api';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Posts() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [itemModal, setItemModal] = React.useState();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [itemData, setItemData] = useState([])

  useEffect(() => {
    async function getPosts() {
      try {
        const data = await get('g3-pipline-hsm?type=posts');
        setItemData(data?.posts);
      } catch (error) {
        alert("Ocorreu um erro ao buscar os posts");
      }
    }
    getPosts();
  }, []);

  const body = (
    <div className={classes.paper}>
      <img src={itemModal?.thumb_img} alt={itemModal?.title} />
      <h2 id="simple-modal-title">{itemModal?.title}</h2>
      <p id="simple-modal-description">
        {itemModal?.content}
      </p>
    </div>
  );

  return (
    
    <Container maxWidth="lg" className={classes.container}>
      { itemData?.length ?
      <ImageList rowHeight={180} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.id}>
            <img src={item.cover_img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>{item.description}</span>}
              actionIcon={
                <IconButton 
                  aria-label={`info about ${item.title}`} 
                  className={classes.icon} 
                  onClick={() => { handleOpen(); setItemModal(item) }}>
                <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        )) }
      </ImageList>
      : <div className={classes.modal}>
          <CircularProgress /> 
        </div>
      }
        <Modal 
          className={classes.modal}
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description">
          {body}
        </Modal>
    </Container>
  );
}

