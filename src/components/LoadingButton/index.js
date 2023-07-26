// Imports
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

function LoadingButton({ onClick }) {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      onClick().finally(() => {
        setLoading(false);
      });
    }
  }, [isLoading, onClick]);

  const handleClick = () => setLoading(true);

  return (
    <div className="d-grid gap-2">
    <Button
    variant="secondary" size="lg"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? "Loading..." : "Hit me!"}
    </Button>
    </div>
  );
}

export default LoadingButton;
