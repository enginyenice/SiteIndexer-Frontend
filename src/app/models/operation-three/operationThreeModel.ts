import { Keyword } from "../keyword/keywordModel";

//Website modeli
export interface Website{
    title:string;
    url:string;
    keywords:Keyword[];
}

// Sonuc Modelindeki Benzerligi hesaplanan websiteler ve benzerlik skorlari modeli
interface SimularityScore{
    similarityScore:number;
    webSite:Website;
}

// Sonuc Modeli
export interface OperationThreeModel{
    webSite:Website;
    webSitePool:SimularityScore[];
}
