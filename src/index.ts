export interface IVersion {
  major: number;
  minor: number;
  patch: number;
  isEmpty: boolean;
  parsed: number[];
  text: string;
}

export const parseVersion = (version: string): IVersion => {
  const match = version.replace(/[^0-9.]/g, '').match(/[0-9]*\.|[0-9]+/g) || [];
  const v: IVersion = {
    isEmpty: false,
    major: +match[0] || 0,
    minor: +match[1] || 0,
    parsed: [],
    patch: +match[2] || 0,
    text: version,
  };
  v.isEmpty = !v.major && !v.minor && !v.patch;
  v.parsed = [v.major, v.minor, v.patch];
  v.text = v.parsed.join('.');
  return v;
};
