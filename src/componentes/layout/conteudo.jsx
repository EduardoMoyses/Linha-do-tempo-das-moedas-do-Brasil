import vintereis from './../../img/moedas/20reis.png'
import cruzeiroNovo from './../../img/moedas/cruzeironovo.png'
import cruzeiro1942 from './../../img/moedas/cruzeiro1942.png'
import cruzeiroReal from './../../img/moedas/cruzeiroreal.png'
import real from './../../img/moedas/real.png'
import cruzadoNovo from './../../img/moedas/cruzadonovo.png'
import cruzado93 from './../../img/moedas/cruzado93.png'
import cruzado from './../../img/moedas/cruzado.png'
import cruzeiros86 from './../../img/moedas/50cruzeiros86.png'
import icon from './../../img/icon.png'
import Styles from './conteudo.module.css'

function Conteudo() {
    return (
     <div className={Styles.conteudo}>
        <header className={Styles.cabecalho}>

          <img src={icon} alt="icone" className={Styles.icon}/>

          <div className={Styles.titulo}>
            <h1>Linha do Tempo das <span>Moedas do Brasil</span></h1>
            <p>Uma jornada pela história do nosso dinheiro.</p>
          </div>
        </header>

        <div className={Styles.principal}>
          <div className={Styles.timeline}>
              <div className={Styles.item}>
                <img src={vintereis} alt="Réis"/>
                <div>
                  <h3>Real (Réis)</h3>
                  <p className={Styles.data}>Até 1942</p>
                  <p className={Styles.paragrafo}>Primeira moeda do padrão réis utilizado no Brasil.</p>
                </div>
              </div>
              <div className={Styles.item}>
                <img src={cruzeiro1942} alt="Cruzeiro"/>
                <div>
                  <h3>Cruzeiro</h3>
                  <p className={Styles.data}>1942–1967</p>
                  <p className={Styles.paragrafo}>Criado durante a Segunda Guerra Mundial para substituir o Réis.</p>
                </div>
              </div>
              <div className={Styles.item}>
                <img src={cruzeiroNovo} alt="Cruzeiro Novo"/>
                <div>
                  <h3>Cruzeiro Novo</h3>
                  <p className={Styles.data}>1967–1970</p>
                  <p className={Styles.paragrafo}>Reforma monetária que trouxe o Cruzeiro Novo.</p>
                </div>
              </div>
              <div className={Styles.item}>
                <img src={cruzeiros86} alt="Cruzeiro"/>
                <div>
                  <h3>Cruzeiro</h3>
                  <p className={Styles.data}>1970–1986</p>
                  <p className={Styles.paragrafo}>Período de alta inflação e diversas mudanças econômicas.</p>
                </div>
              </div>
              <div className={Styles.item}>
                <img src={cruzado} alt="Cruzado"/>
                <div>
                  <h3>Cruzado</h3>
                  <p className={Styles.data}>1986–1989</p>
                  <p className={Styles.paragrafo}>Plano Cruzado e tentativa de controle da inflação.</p>
                </div>
              </div>
              <div className={Styles.item}>
                <img src={cruzadoNovo} alt="Cruzado Novo"/>
                <div>
                  <h3>Cruzado Novo</h3>
                  <p className={Styles.data}>1989–1990</p>
                  <p className={Styles.paragrafo}>Nova moeda após o fracasso do Plano Cruzado.</p>
                </div>
              </div>
              <div className={Styles.item}>
                <img src={cruzado93} alt="Cruzeiro"/>
                <div>
                  <h3>Cruzeiro</h3>
                  <p className={Styles.data}>1990–1993</p>
                  <p className={Styles.paragrafo}>Inflação alta retorna e o Cruzeiro volta a circular.</p>
                </div>
              </div>
              <div className={Styles.item}>
                <img src={cruzeiroReal} alt="Cruzeiro Real"/>
                <div>
                  <h3>Cruzeiro Real</h3>
                  <p className={Styles.data}>1993–1994</p>
                  <p className={Styles.paragrafo}>Moeda de transição antes do Real.</p>
                </div>
              </div>
              <div className={Styles.item}>
                <img src={real} alt="Real"/>
                <div>
                  <h3>Real</h3>
                  <p className={Styles.data}>1994–Hoje</p>
                  <p className={Styles.paragrafo}>Moeda oficial do Brasil até os dias atuais.</p>
                </div>
              </div>
          </div>
          <aside className={Styles.aside}>
            <div className={Styles.content}>
              <div className={Styles.fundo}>
                <div className={Styles.textoMoeda}>
                  <div className={Styles.dinheiro}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-dollar" viewBox="0 0 16 16">
                    <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/>
                  </svg>
                  </div>
                  <h2>A evolução da nossa moeda</h2>
                  <p className={Styles.paragrafo}>Mais que dinheiro, cada moeda representa um capítulo da história econômica, política e social do Brasil.</p>
                </div>
                <div className={Styles.iconsAside}>
                  <div className={Styles.icone}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
                      </svg>
                      <div>9</div>
                      <p>Períodos</p>
                  </div>
                  <div className={Styles.icone}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>
                      <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"/>
                      <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/>
                      <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"/>
                    </svg>
                    <div>80+</div>
                      <p>Anos de história</p>
                  </div>
                  <div className={Styles.icone}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-flag" viewBox="0 0 16 16">
                      <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21 21 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21 21 0 0 0 14 7.655V1.222z"/>
                    </svg>
                    <div>1</div>
                      <p>Moéda que nos une</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
     </div>
    )
}

export default Conteudo