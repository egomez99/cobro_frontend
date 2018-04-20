import React, { Component, Fragment } from 'react';
import logo from './logo.png';
import methods_statement_cards from './methods_statement_cards.png';
import oxxopay from './oxxopay.svg';
import paypal from './paypal.svg';
import './App.css';
import Switch from 'react-router-dom/es/Switch';
import Route from 'react-router-dom/es/Route';
import Redirect from 'react-router-dom/es/Redirect';
import BrowserRouter from 'react-router-dom/es/BrowserRouter';
import f_pago1 from './methods_statement_cards.png';
import f_pago2 from './oxxopay.svg';
import f_pago3 from './paypal.svg';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route path="/productos/:id" component={Item} />
        <Route path="/" exact strict component={Item} />
          <Redirect to="/productos/1" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

class Item extends Component {
  styles = {
    itemContainer: {
      display: 'flex',
      height: '50rem',
      paddingTop: '5rem',
      paddingLeft: '15rem',
      paddingRight: '10rem'
    },
    navContainer: {
      position: 'fixed',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '4rem',
      width: '100%',
      backgroundColor: 'white',
      borderBottom: '1px solid rgba(0,0,0,.1)'
    },
    navLogo: {
      height: '80%'
    },
    navPago1: {
        display: 'flex',
        justifycontent: 'center',
        width: '50%',
        height: '50%',
        alignItems: 'flex'
    },
    navLinksContainer: {
      display: 'flex',
      paddingRight: '4rem'
    },
    navLink: {
      fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
      fontWeight: '300',
      fontSize: '1.1rem',
      wordWrap: 'break-word',
      textDecoration: 'none',
      color: 'inherit',
      marginRight: '1rem'
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: '100%',
      flexGrow: 3
    },
    itemImage: {
      height: '80%',
      width: 'auto'
    },
    detailsContainer: {
      paddingLeft: '6rem',
      paddingTop: '4rem',
      overflow: 'auto',
      flexGrow: 7
    },
    title: {
      fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
      fontWeight: '300',
      fontSize: '2rem',
      wordWrap: 'break-word'
    },
    description: {
      fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
      fontWeight: '400',
      fontSize: '1.1rem',
      wordWrap: 'break-word'
    },
    details: {
      fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
      fontWeight: '300',
      fontSize: '1.1rem',
      wordWrap: 'break-word'
    },
    price: {
      fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
      fontSize: '1.2rem',
      fontWeight: '400',
      wordWrap: 'break-word'
    },
    shipping: {
      fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
      fontSize: '1.3rem',
      fontWeight: '500',
      wordWrap: 'break-word'
    }
  };
  products = [
      {
          id: '1',
          title: 'Digestion',
          description:
            'Producto: Digestión Pura. Colon limpio y sana digestión. No mas estreñimiento. Aporta mucílagos naturales, los cuales ayudan a  limpiar el colon de una manera eficáz y natural, sin dañar la salud.',
          price: 290.0,
          paymentCredit: 'http://www.gooogle.com',
          paymentPaypal: 'http://localhost:9000/charge/paypal/item1',
          paymentOxxo: 'http://www.gooogle.com',
          image:
            'http://www.suiiki.com/wp-content/uploads/2018/01/DigestionPura_small.png',
          shipping: 'A toda la Republica, El tiempo de entrega del producto por parte de la Mensajería inicia a partir de la confirmación de la recepción de la orden por parte de la Tienda.'
        },
        {
      id: '2',
      title: 'Fitoestrogenos',
      description:
        "Presentación: Tarro con 270 gr. (30 porciones por envase, equivalente a un mes).",
      price: 447.00,
      paymentCredit: 'http://www.gooogle.com',
      paymentPaypal: 'http://localhost:9000/charge/paypal/item2',
      paymentOxxo: 'http://www.gooogle.com',
      image:
        'http://www.suiiki.com/wp-content/uploads/2018/01/Fitoestrogenos_small-1-300x200.png',
      shipping: 'A toda la Republica, El tiempo de entrega del producto por parte de la Mensajería inicia a partir de la confirmación de la recepción de la orden por parte de la Tienda.'
    	  
    },
    {
        id: '3',
        title: 'Moringa Suiiki',
        description:
         "Rico en Vitaminas, Minerales y antioxidantes.\t\tLa moringa es rica en un alto contenido de vitaminas, minerales y aminoácidos.",
        price: 250.00,
        paymentCredit: 'http://www.gooogle.com',
        paymentPaypal: 'http://localhost:9000/charge/paypal/item3',
        paymentOxxo: 'http://www.gooogle.com',
        image:
          'http://www.suiiki.com/wp-content/uploads/2018/01/QuemaGrasa_big-300x200.png',
        shipping: 'A toda la Republica, El tiempo de entrega del producto por parte de la Mensajería inicia a partir de la confirmación de la recepción de la orden por parte de la Tienda.'
      },
      {
          id: '4',
          title: 'Quema Grasa Corporal',
          description:
            'Ayudan a regular el apetito, causando sensación de saciedad. Es un excelente adelgazante y antinflamatorio. No causa efectos dañinos a la salud. No provoca rebote, ya que es natural y su efecto es gradual.',
          price: 299.90,
          paymentCredit: 'http://www.gooogle.com',
          paymentPaypal: 'http://localhost:9000/charge/paypal/item4',
          paymentOxxo: 'http://www.gooogle.com',
          image:
            'http://www.suiiki.com/wp-content/uploads/2018/01/QuemaGrasa_big-300x200.png',
          shipping: 'A toda la Republica, El tiempo de entrega del producto por parte de la Mensajería inicia a partir de la confirmación de la recepción de la orden por parte de la Tienda.'
      },
      {
        id: 'Sucess',
        title: 'Te hemos timado !!!',
        description:
          'Has comprado nuestros productos que ni sirven y no hay devoluciones !!!',
        
        paymentCredit: '',
        paymentPaypal: '',
        paymentOxxo: '',
        image:
          'https://es.dreamstime.com/stock-de-ilustraci%C3%B3n-emoticon-lindo-con-los-pulgares-para-arriba-emoji-ejemplo-image96186961',
        shipping: 'Lo siento tu producto nunca llegara jeje.'
      }
  ];
  render() {
    const { styles, products } = this;
    const product = products.find(p => p.id == this.props.match.params.id) || {
      ...products[Math.floor(Math.random() * products.length)]
    };
    return (
      <Fragment>
        <div style={styles.navContainer}>
          <img style={styles.navLogo} src={logo} alt="suiiki" />
          <div style={styles.navLinksContainer}>
            <a style={styles.navLink} href="http://www.suiiki.com/">
              Inicio
            </a>
            <a style={styles.navLink} href="http://suiiki.com/sobre-el-sitio/">
              Sobre el Sitio
            </a>
            <a style={styles.navLink} href="http://suiiki.com/contact/">
              Contacto
            </a>
          </div>
        </div>
        <div style={styles.itemContainer}>
          <div style={styles.imageContainer}>
            <img style={styles.img} src={product.image} alt="Product Image" />
          </div>
          <div style={styles.detailsContainer}>
            <h1 style={styles.title}>{product.title}</h1>
            <p style={styles.description}>{product.description}</p>
            <p style={styles.price}>${product.price} MXN</p>
            <p style={styles.shipping}>información de envío</p>
            <p style={styles.details}>{product.shipping}</p>
            
            <p style={styles.details}>
            <a href={product.paymentCredit}>
        	    <img  style={styles.navPago1} src={f_pago1} alt="Paga no seas codo" />
        	</a>
        	<a href={product.paymentOxxo}>
        	    <img style={styles.navPago1} src={f_pago2} alt="Pagame no te hagas" />
            </a>
        	<a href={product.paymentPaypal}>
        	    <img style={styles.navPago1} src={f_pago3} alt="ya valio !!" />
            </a>
            </p>
            
          </div>          
        </div>
      </Fragment>
    );
  }
}
