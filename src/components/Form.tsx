import React, { useEffect } from 'react';
import UserSelector from './UserSelector';
import ReasonSelector from './ReasonSelector';
import { downloadBlob } from '../js/dom-utils';
import { generatePdf } from '../js/pdf-util';
import config from '../config';
import pdfBase from '../certificate.pdf';

const Form = () => {
    const getDefaultUser = () => (
      document.location.search.replace('?p=', '') 
      || (
          (config && config.defaultUser && config.users && config.users[config.defaultUser])
          ? config.defaultUser
          : ''
         )
    )
    const generate = async () => {
      const formInputs = userData.profile;
      // set current date and hour
      const now = new Date();
      formInputs.datesortie = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
      formInputs.heuresortie = `${now.getHours()}:${now.getMinutes()}`;
      // generate pdf
      const pdfBlob = await generatePdf(formInputs, reason, pdfBase);
      const creationDate = now.toLocaleDateString('fr-CA');
      const creationHour = now
        .toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
        .replace(':', '-');
      // download pdf
      downloadBlob(pdfBlob, `attestation-${creationDate}_${creationHour}.pdf`);
    }
    const handleUserSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setUser(e.target.value);
    }
    const handleReasonSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
      setReason(e.currentTarget.value);
    }
    const [user, setUser] = React.useState<string>(getDefaultUser());
    const [reason, setReason] = React.useState<string>('');
    const [userData, setUserData] = React.useState<any>({});

    useEffect(() => {
      // update user data
      if(user !== '') {
        const userData: any = config.users[user as keyof typeof config.users];
        setUserData(config.users[user as keyof typeof config.users]);
        setReason(userData.settings.defaultChoice);
      } else {
        setUserData({});
        setReason('')
      }
    }, [user]);

    return (
      <form>
        <UserSelector currentUser={user} onChange={handleUserSelect} />
        <ReasonSelector currentReason={reason} reasons={(userData && userData.settings && userData.settings.choices) ? userData.settings.choices : null} onChange={handleReasonSelect} />
        <button type="button" className="btn btn-info btn-lg btn-block" id="generate-btn" onClick={generate}>
          Générer
        </button>
      </form>
    );
}

export default Form;