import React, { useEffect, useState } from "react";
import history from "history/browser";
import { Button, Menu } from "@zimekk/components";

const getPage = (location: { hash: string }) => {
  const [path, hash = "/"] = decodeURI(location.hash).match(/^#(.+)/) || [];
  return hash;
};

export default () => {
  const [page, setPage] = useState(getPage(history.location));
  const [counter, setCounter] = useState(0);

  useEffect(() =>
    // location is an object like window.location
    history.listen(({ location, action, ...rest }) =>
      setPage(getPage(location))
    )
  );
  return (
    <section>
      <h1>style</h1>
      <nav>
        <Button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            setCounter((counter) => counter + 1)
          }
        >
          {counter}
        </Button>
        <Button>Button</Button>
        <Menu>Menu</Menu>
      </nav>
    </section>
  );
};
