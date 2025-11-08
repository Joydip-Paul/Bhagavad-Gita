export interface Montro {
  montro_id: number;
  teller: string;
  montro: string;
  meaning?: string;
}

export interface GitaChapter {
  id: number;
  part: string;
  module_name: string;
  montros: Montro[];
}
