import React, { useEffect } from 'react';
import UserSelector from './UserSelector';
import ReasonSelector from './ReasonSelector';
import { downloadBlob } from '../js/dom-utils';
import { generatePdf } from '../js/pdf-util';
import config from '../config';
import { UserType } from '../config/types';
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
    if (userData && userData.profile) {
      const userProfile = userData.profile;
      // set current date and hour
      const now = new Date();
      userProfile.datesortie = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
      userProfile.heuresortie = `${now.getHours()}:${now.getMinutes()}`;
      // generate pdf
      const pdfBlob = await generatePdf(userProfile, reason, pdfBase);
      const creationDate = now.toLocaleDateString('fr-CA');
      const creationHour = now
        .toLocaleTimeString('fr-FR', {
          hour: '2-digit',
          minute: '2-digit',
        })
        .replace(':', '-');
        // download pdf
      downloadBlob(pdfBlob, `attestation-${creationDate}_${creationHour}.pdf`);
    } else {
      // TODO handle error
    }
  }
  const handleUserSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUser(e.target.value);
  }
  const handleReasonSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReason(e.currentTarget.value);
  }
  const [user, setUser] = React.useState<string>(getDefaultUser());
  const [reason, setReason] = React.useState<string>('');
  const [userData, setUserData] = React.useState<UserType | null>(null);

  useEffect(() => {
    // update user data
    if(user !== '') {
      const userData: UserType = config.users[user as keyof typeof config.users];
      setUserData(config.users[user as keyof typeof config.users]);
      if(userData && userData.settings && userData.settings.defaultChoice) {
        setReason(userData.settings.defaultChoice);
      }
    } else {
      setUserData(null);
      setReason('')
    }
  }, [user]);

  return (
    <form>
      <UserSelector currentUser={user} onChange={handleUserSelect} />
      <ReasonSelector currentReason={reason} reasons={(userData && userData.settings && userData.settings.choices) ? userData.settings.choices : null}
        onChange={handleReasonSelect} />
      <button type="button" className="btn btn-info btn-lg btn-block"
        id="generate-btn" onClick={generate}>
          Générer
      </button>
    </form>
  );
}

export default Form;
