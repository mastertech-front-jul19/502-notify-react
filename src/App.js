import React from 'react';
import AppStyle from './AppStyle';

class App extends React.Component {
  render() {
    return (
      <div style={AppStyle.container}>
        <div style={AppStyle.faixa}></div>
        <div style={AppStyle.banner}>
          <div style={AppStyle.titles}>
            <div style={AppStyle.title}>Notify</div>
            <div style={AppStyle.subTitle}>Lorem Ipsum is simply dummy text of the printing and typesetting</div>
            <div style={AppStyle.icons}>
              <div style={AppStyle.iconApple}></div>
              <div style={AppStyle.iconAndroid}></div>
              <div style={AppStyle.iconWindows}></div>
            </div>  
          </div>
          <div className="smartphone"></div>
        </div>
        <section className="section-icons">
          <div className="conteudo-icon">
            <div className="icon1"></div>
            <div className="titulo-conteudo">Lorem Ipsum</div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
        </p>
          </div>
          <div className="conteudo-icon">
            <div className="icon2"></div>
            <div className="titulo-conteudo">Lorem Ipsum</div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
          </div>
          <div className="conteudo-icon">
            <div className="icon3"></div>
            <div className="titulo-conteudo">Lorem Ipsum</div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
          </div>
        </section>
        <section className="conteudo-video">
          <div className="bloco-video titulo-padrao">Lorem Ipsum
            <div className="subtitle-padrao">Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.</div>
            <form>
              <input type="email" className="input-texto" placeholder="Digite seu E-mail" required />
              <button type="button">Enviar</button>
            </form>
          </div>
          <div className="video"></div>
        </section>
        <section className="section-fotos">
          <div className="bloco-texto">
            <p className="subtitle-foto">lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.</p>
            <p className="titulo-foto">Lorem Ipsum</p>
            <div className="bloco-foto">
              <div className="imgens-fotos"></div>
              <div className="imgens-fotos"></div>
              <div className="imgens-fotos"></div>
              <div className="imgens-fotos"></div>
              <div className="imgens-fotos"></div>
              <div className="imgens-fotos"></div>
              <div className="imgens-fotos"></div>
              <div className="imgens-fotos"></div>
              <div className="imgens-fotos"></div>
              <div className="imgens-fotos"></div>
              <div className="imgens-fotos"></div>
              <div className="imgens-fotos"></div>
              <div className="imgens-fotos"></div>
              <div className="imgens-fotos"></div>
              <div className="imgens-fotos"></div>
              <div className="imgens-fotos"></div>
            </div>
            <div className="bloco-texto">
              <p className="titulo-foto1">Lorem Ipsum</p>
              <p className="subtitle-foto1">lorem Ipsum is simply dummy text of the printing and typesetting
                industry.</p>
            </div>
            <div className="bloco-foto">
              <div className="icon-fotos circle"></div>
              <div className="icon-fotos circle"></div>
              <div className="icon-fotos circle"></div>
              <div className="icon-fotos circle"></div>
            </div>
          </div>
        </section>
        <nav>
          <a href="#">Contato</a>
          <a href="#">Download</a>
          <a href="#">Press</a>
          <a href="#">Email</a>
          <a href="#">Support</a>
          <a href="#">Privacy Policy</a>
        </nav>
      </div>
    );
  }
}

export default App;
