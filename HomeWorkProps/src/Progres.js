import React from "react";
import { Progress } from "reactstrap";

function Progres({ progres, comments }) {
    const combinedArray = progres.map((prog, index) => ({
      prog,
      comment: comments[index]
    }));
  
    return (
      <div>
        {combinedArray.map(({ prog, comment }) => (
          <>
            <p>{comment}</p>
            <div className="text-center">{prog}%</div>
            <Progress value={prog}
             />
            <br/>
          </>
        ))}
      </div>
    );
  }

export default Progres;