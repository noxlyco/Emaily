type Styles = { [key: string]: string };

export function createClassNameFactory(mainClass: string, styles: Styles) {
  return (...classNames: (string | undefined | false)[]) => {
    return [
      styles[mainClass],
      ...classNames.map((cn) => (cn ? styles[`${mainClass}--${cn}`] : "")),
    ]
      .filter(Boolean)
      .join(" ");
  };
}
