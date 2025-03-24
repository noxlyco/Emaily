type Styles = { [key: string]: string };

export function createClassNameFactory(mainClass: string, styles: Styles) {
  return (
    ...classNames: (
      | string
      | undefined
      | false
      | Record<string, boolean>
    )[]
  ) => {
    const classes = classNames.flatMap((cn) => {
      if (typeof cn === "string") {
        return cn;
      }
      if (typeof cn === "object" && cn !== null) {
        return Object.entries(cn)
          .filter(([, condition]) => condition)
          .map(([key]) => key);
      }
      return [];
    });

    const className = [mainClass, ...classes].join("--");

    return styles[className] || className;
  };
}
