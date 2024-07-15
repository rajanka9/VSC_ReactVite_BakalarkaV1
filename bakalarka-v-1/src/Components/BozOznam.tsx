import "./BoxOznam.css"
import React from "react";


interface Props {
    teachersNameOznam: string;
    dateOznam: string;
    noteOznam: string;
}

export const BoxOznam : React.FC<Props> = ({teachersNameOznam, dateOznam, noteOznam}) => {
    return (
        <>
        <div className="boxOznam">
    
        <img
        className="imgOznam"
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f27af5342c5ca2f4459b6877ad08a0b89904142d638b54f2a4fce662a217522c?"
        />

        <div className="textOznamZarovnanie">
            <div className="textRiadokOznam">
                <div className="pismoBoxOznamMale">{teachersNameOznam}</div>
                <div className="pismoBoxOznamMale">{dateOznam}</div>
        </div>

          <div className="pismoBoxOznamNote">{noteOznam}</div>
        </div>

        </div>
        </>      
    );
  };

  BoxOznam.defaultProps = {
    teachersNameOznam: 'M. Priezvisko',
    dateOznam: '29.9.2029',
    noteOznam: 'Oznam Test - Sed non nibh quis nibh tempor vestibulum. Sed mattis vulputate risus nec suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };