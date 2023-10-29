export default function handler(req, res) { res.status(200).json([{ "chemical": "全部鉀鹽", "solubility": "可溶" }, { "chemical": "全部鈉鹽", "solubility": "可溶" }, { "chemical": "全部銨鹽", "solubility": "可溶" }, { "chemical": "全部硝酸鹽", "solubility": "可溶" }, { "chemical": "氫氧化物(除NH4OH,KOH,NaOH,Ba(OH)2,Ca(OH)2)", "solubility": "不可溶" }, { "chemical": "氯化物(除HgCl,AgCl,PbCl2)", "solubility": "可溶" }, { "chemical": "硫酸鹽(除BaSO4,PbSO4,CaSO4,Hg2SO4,Ag2SO4)", "solubility": "可溶" }, { "chemical": "硫化物(除銨鹽,鉀鹽,鈉鹽)", "solubility": "不可溶" }, { "chemical": "亞硫酸鹽(除銨鹽,鉀鹽,鈉鹽,MgSO3)", "solubility": "不可溶" }, { "chemical": "碳酸鹽(除銨鹽,鉀鹽,鈉鹽,MgCO3)", "solubility": "不可溶" }, { "chemical": "磷酸鹽(除銨鹽,鉀鹽,鈉鹽)", "solubility": "不可溶" }, { "chemical": "硅酸鹽(除銨鹽,鉀鹽,鈉鹽)", "solubility": "不可溶" }, { "chemical": "NH4OH", "solubility": "可溶" }, { "chemical": "KOH", "solubility": "可溶" }, { "chemical": "NaOH", "solubility": "可溶" }, { "chemical": "Ba(OH)2", "solubility": "可溶" }, { "chemical": "Ca(OH)2", "solubility": "不溶" }, { "chemical": "HgCl", "solubility": "不可溶" }, { "chemical": "AgCl", "solubility": "不可溶" }, { "chemical": "PbCl2", "solubility": "不溶" }, { "chemical": "BaSO4", "solubility": "不可溶" }, { "chemical": "PbSO4", "solubility": "不可溶" }, { "chemical": "CaSO4", "solubility": "不溶" }, { "chemical": "Hg2SO4", "solubility": "不溶" }, { "chemical": "Ag2SO4", "solubility": "不溶" }, { "chemical": "MgSO3", "solubility": "不溶" }, { "chemical": "MgCO3", "solubility": "不溶" },]); }