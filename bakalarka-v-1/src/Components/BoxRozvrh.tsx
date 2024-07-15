import "./BoxRozvrh.css"
import React from "react";

//interface Props{}
//const NavBar1 = (props: Props) => {

// passing props
// https://www.youtube.com/watch?v=kHJSNFU7H4U 

/*
Here are the key takeaways: 
Class components are robust and feature-rich, offering lifecycle methods and state management, but they tend to be more verbose. 
Functional components are streamlined and concise, and with React Hooks, they now have the capabilities that were once exclusive to class components.
Source Google QuickRecom
Or
https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.dhiwise.com/post/react-functional-components-vs-class-components&ved=2ahUKEwjRtO332qOHAxUzgP0HHcRLDyEQFnoECBEQAw&usg=AOvVaw0iNu0KIDWZIiiaj0AzX1LT
*/

// React & TypeScript: What is React.FC and Why should i use it? 
// https://dev.to/elhamnajeebullah/react-typescript-what-is-reactfc-and-why-should-i-use-it-4029
interface Props {
    teachersName: string;
    classRoom: string;
    timeInSchedule: string;
    capacityInClass: string;
}

export const BoxCvicenie : React.FC<Props> = ({teachersName, classRoom, timeInSchedule, capacityInClass}) => {
    return (
        <>
        <div className="boxCvicenie">

          <div className="pismoBoxTenke">{teachersName}</div>
          <div className="pismoBoxHrube">{timeInSchedule}</div>
        
          <div className="centrovanieVRiadku">
            <div className="pismoBoxHrube">{classRoom}</div>
            <div className="pismoBoxHrube">{capacityInClass}</div>
          </div>

        </div>
        </>      
    );
  };

  
  BoxCvicenie.defaultProps = {
    teachersName: 'M. Priezvisko',
    classRoom: 'PO000',
    timeInSchedule: '00:00 - 00:01',
    capacityInClass: '0/1',
  };

  // meno a ucebna v riednom riadku
  /*
  export const BoxCvicenie : React.FC<Props> = ({teachersName, classRoom, timeInSchedule, capacityInClass}) => {
    return (
        <>
        <div className="boxCvicenie">
          <div className="centrovanieVRiadku">
            <div className="pismoBoxTenke">{teachersName}</div>
            <div className="pismoBoxTenke">{classRoom}</div>
          </div>

          <div className="pismoBoxHrube">{timeInSchedule}</div>
          <div className="pismoBoxHrube">{capacityInClass}</div>
        </div>
        </>      
    );
  };*/



/*function BoxCvicenie({teachersName, classRoom, timeInSchedule, capacityInClass}: props) {
    return (
      <>
        <div className="boxCvicenie">
          <div className="centrovanieVRiadku">
            <div className="pismoBoxTenke">{teachersName}</div>
            <div className="pismoBoxTenke">{classRoom}</div>
          </div>

          <div className="pismoBoxHrube">{timeInSchedule}</div>
          <div className="pismoBoxHrube">{capacityInClass}</div>
        </div>
    </>
  );
}

export default BoxCvicenie*/