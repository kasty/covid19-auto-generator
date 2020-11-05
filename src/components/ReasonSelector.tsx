import React, {
  FC, 
} from 'react';
import config from '../config';

interface ReasonSelectorProps {
  currentReason: string;
  reasons: string[] | null;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ReasonSelector: FC<ReasonSelectorProps> = ({
  currentReason,
  onChange,
  reasons,
}: ReasonSelectorProps) => {
    return (
      <div>
        <h2>Je vais ...</h2>
        <div className="custom-control custom-radio">
          {
          Object.keys(config.reasonsList).map((reason) => {
            if((reasons && reasons?.includes(reason)) || reasons == null) {
              return (
                <p key={reason} id={`reason-${reason}`} className="choice mt-3 mb-3">
                  <input type="radio" name="field-reason" id={reason} value={reason} className="custom-control-input" checked={ currentReason === reason} onChange={onChange} />
                  <label htmlFor={reason} className="custom-control-label">{config.reasonsList[reason as keyof typeof config.reasonsList]?.title} {config.reasonsList[reason as keyof typeof config.reasonsList]?.emoji}</label>
                </p>
              );
            } else {
              return null;
            }
          })
          }
      </div>
    </div>
    );
}

export default ReasonSelector;
