import {FaInstagram, FaFacebookF, FaYoutube} from 'react-icons/fa'
import './styles.css'
import coverphoto from '../src/assets/cover-photo.png'
import profilephoto from '../src/assets/profile-photo.jpg'


function App() {
  return (
    <div className="container">
      <div className="nav">
        <div className="cover">
          <img className="cover-photo" src={coverphoto}/>
        </div>
        <div className="profile">
          <img className="profile-photo" src={profilephoto}/>
        </div>
      </div>

      <div className="content-one">
        <h1>SENAI<p>lab VG</p></h1>
        <span><p>"A criatividade é pensar coisas novas.</p><p>A inovação é fazer coisas novas".
Theodore Levitt</p></span>
        <div className="social-midia">
          <a target='_blank' href='https://www.instagram.com/senaimt/'><FaInstagram size={20} color='#f0f0f0'/></a>
          <a target='_blank' href='https://www.facebook.com/senaimt/'><FaFacebookF size={20} color='#f0f0f0'/></a>
          <a target='_blank' href='https://www.youtube.com/@senai_mt'><FaYoutube size={20} color='#f0f0f0'/></a>
        </div>
      </div>

      <div className="content-two">
        <a target='_blank' href='https://docs.google.com/forms/u/0/d/e/1FAIpQLSdsV0xuZpVfuq9B9Yen7ylmc_rlJdntqkcsWccDNblk2-X7NA/formResponse?pli=1'>Fazer check-in</a>
        <a target='_blank' href='https://senaimt-my.sharepoint.com/:x:/r/personal/alison_rodrigues_senaimt_ind_br/Documents/Checklist%20do%20SENAIlab%202023.xlsx?d=w02021bc9be2f4a98a7166922ea9151ad&csf=1&web=1&e=a6dXZm'>Verificar o checklist</a>
        <a target='_blank' href='https://forms.office.com/Pages/ResponsePage.aspx?id=PzL2HiPI3k-vqBeBWNg00sFaIf_Cm_hFuLnWpQvlP-1UMEJLVzExQjQzTk9QMEsyQk9PSTA3UERYQy4u'>Agendamento do espaço</a>
        <a target='_blank' href='https://app.powerbi.com/view?r=eyJrIjoiZTcxNjBiOWUtYWEwOC00MjMzLWE2MTUtYmVmM2EzY2QyOTk3IiwidCI6IjFlZjYzMjNmLWM4MjMtNGZkZS1hZmE4LTE3ODE1OGQ4MzRkMiJ9'>Relatório do check-in</a>
      </div>

      <a className='atention' target='_blank' href='https://forms.gle/mDBwUdxCD7H4zfKs9'>Problemas no SENAIlab?<br/>Avisa-nos agora</a>
    </div>
  );
}

export default App;
