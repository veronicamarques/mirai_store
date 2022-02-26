import React, { useState } from "react";
import emailSuccess from "../../assets/img/email-confirmation.jpg";
import emailFailure from "../../assets/img/email-failure.jpeg";
import { useParams } from "react-router-dom";

function EmailConfirmation() {
  const { token } = useParams();

  const [isEmailConfirmed, setIsEmailConfirmed] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <div style={isLoaded ? { height: "100%" } : {}} className="d-flex justify-content-center align-items-center">
        <div>
          <img
            src={isEmailConfirmed ? emailSuccess : emailFailure}
            style={isLoaded ? { maxHeight: "80vh" } : {}}
            className="img-fluid"
            alt=""
            onLoad={() => setIsLoaded(true)}
          />
          {isLoaded ? (
            <p className="text-center" style={{ fontSize: "3vh" }}>
              {isEmailConfirmed ? "Seu email foi confirmado com sucesso!" : "Desculpe, não foi possivel confirmar seu email."}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default EmailConfirmation;
