import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { useStyles } from './styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { get } from '../../services/api';
import Modal from '@material-ui/core/Modal';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CardMedia } from '@material-ui/core';


export default function Home() {
  const classes = useStyles();
  const [itemData, setItemData] = useState([])
  const [open, setOpen] = useState(false);
  const [itemModal, setItemModal] = useState();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    async function getCourses() {
      try {
        const data = await get('g3-pipline-hsm?type=cursos');
        setItemData(data?.posts);
      } catch (error) {
        alert("Ocorreu um erro ao buscar os cursos");
      }
    }
    getCourses();
  }, []);

  const getClasses = async id => {
    try {
      const data = await get(`g3-pipline-hsm?type=aulas&id=${id}`);
      setItemModal(data?.posts);
    } catch (error) {
      alert("Ocorreu um erro ao buscar as aulas");
    }
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const body = (
    <div className={classes.rootModal}>
      {itemModal?.map((item) => (
      <Accordion key={item.id} expanded={expanded === `panel${item?.id}`} onChange={handleChange(`panel${item?.id}`)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>{item?.title}</Typography>
          <Typography className={classes.secondaryHeading}>{item?.description}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <CardMedia
            component='iframe'
            title='test'
            src={item.url}
            />
        </AccordionDetails>
      </Accordion>
    )) }
    </div>
  );

  return (  
    <Container maxWidth="lg" className={classes.container}>
      <List className={classes.root}>
      {itemData?.map((item) => (
        <ListItem onClick={() => { handleOpen(); getClasses(item.id) }} key={item.id}>
          <ListItemAvatar>
            <Avatar>
              <img src={item?.thumb_img} alt={item?.title} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.title} secondary={item.description} />
        </ListItem>
        )) }
      </List>
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
