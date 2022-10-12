Search.setIndex({"docnames": ["README", "fall_2022/0_motivation", "fall_2022/1_dataSourcing", "fall_2022/2_dataContinuity", "fall_2022/3_dataTimeliness", "fall_2022/appendix_vectorize", "fall_2022/how_to_use", "intro"], "filenames": ["README.md", "fall_2022\\0_motivation.ipynb", "fall_2022\\1_dataSourcing.ipynb", "fall_2022\\2_dataContinuity.ipynb", "fall_2022\\3_dataTimeliness.ipynb", "fall_2022\\appendix_vectorize.ipynb", "fall_2022\\how_to_use.ipynb", "intro.md"], "titles": ["GearUp-MessyData", "Chapter 0 - Why do we need robust data?", "Chapter 1 - Data Sourcing", "Chapter 2 - Data Continuity", "Chapter 3 - Data Timeliness", "Appendix A: Optimizing data filling via Vectorization", "Preface: How to use this book", "Welcome to the Understanding Messy Time Series Data workshop!"], "terms": {"ssd": [0, 3, 4, 5, 6], "resourc": [0, 1, 2, 3, 4, 5], "fall": [0, 6, 7], "2022": [0, 2, 6, 7], "workshop": [0, 3, 4, 5], "seri": [0, 1, 4, 5, 6], "work": [0, 2, 3, 5], "real": [0, 1, 2, 3, 4], "world": [0, 2], "data": [0, 6], "garbag": [], "out": [1, 2, 3, 5, 6], "befor": [1, 2, 3, 5], "run": [1, 2, 3, 5, 6], "ani": [1, 2, 3, 4, 5, 6], "code": [4, 6, 7], "block": [1, 2, 3, 5], "follow": [1, 2, 4, 5, 6], "pleas": [1, 2, 3, 4, 5, 6], "ensur": [1, 2, 3, 5], "you": [1, 2, 3, 4, 5, 6], "have": [1, 2, 3, 4, 5, 6], "necessari": [1, 2, 3, 5], "packag": [1, 2, 3, 5], "instal": [1, 2, 3, 5], "via": [1, 2, 3, 6], "pip": [1, 2, 3, 5], "panda": [1, 2, 3, 5], "matplotlib": [1, 2, 3], "start": [1, 2, 3, 5, 6], "explor": [1, 2, 3, 4, 6, 7], "how": [1, 2, 3, 4, 7], "wrangl": [1, 5], "life": [1, 2, 3], "messi": [1, 3, 6], "kei": [1, 2, 3, 4, 6, 7], "understand": [1, 3, 5, 6], "would": [1, 2, 3, 5], "want": [1, 2, 4, 5], "so": [1, 2, 3, 4, 5, 6], "motiv": [1, 2, 4], "can": [1, 2, 3, 4, 5, 6, 7], "help": [1, 2, 3, 5], "us": [1, 2, 3, 4, 5], "make": [1, 2, 3, 4, 5], "decis": [1, 2, 3, 4, 7], "gener": [1, 3, 4, 5], "process": [1, 2, 3, 4, 5], "interpret": [1, 5], "nowadai": 1, "often": [1, 2, 3, 5], "hear": 1, "stori": 1, "analysi": [1, 2, 3, 4, 5, 6, 7], "gone": 1, "awri": 1, "misappl": 1, "cut": [1, 5], "edg": 1, "technolog": 1, "all": [1, 2, 3, 4, 5, 6], "too": [1, 3, 5], "common": [1, 2, 3], "e": [1, 2, 3, 4, 5, 6], "g": [1, 2, 3, 4, 6], "machin": [1, 3, 5, 6], "learn": [5, 7], "reproduc": 1, "crisi": 1, "proper": 1, "analyt": [1, 2, 3], "techniqu": [1, 2, 3, 5], "implement": [1, 3, 5], "context": [1, 2, 5, 7], "flaw": 1, "also": [1, 2, 3, 4, 5], "lead": [1, 3, 4, 5], "faulti": 1, "conclus": [1, 5], "throughout": 1, "research": [1, 2, 3, 4, 5], "pipelin": 1, "mani": [1, 2, 3, 5, 6], "wai": [1, 2, 3, 4], "particularli": [1, 2, 3, 5], "salient": 1, "ar": [1, 2, 3, 4, 5, 6, 7], "bias": [1, 2, 3], "some": [1, 2, 3, 4, 5], "most": [1, 2, 3, 4, 5], "ll": [1, 2, 3, 4, 5], "find": [1, 2, 3, 5], "includ": [1, 2, 3, 5, 6], "select": [1, 2, 4, 6], "bia": [1, 2], "ex": 1, "test": [1, 2, 5], "popul": [1, 3], "being": [1, 2, 3, 5], "repres": [1, 2, 3], "whole": 1, "exclud": [1, 3], "minor": 1, "group": [1, 2], "histor": [1, 3], "nlp": [1, 4], "word": [1, 5], "embed": 1, "model": 1, "replic": [1, 2, 3], "gender": 1, "analog": [1, 2], "like": [1, 2, 3, 5], "man": 1, "doctor": 1, "woman": 1, "nurs": 1, "due": [1, 3, 5, 6], "dispar": [1, 2], "opportun": [1, 2], "survivorship": 1, "evalu": [1, 2, 3, 5], "perform": [1, 2, 3, 5], "hedg": [1, 2], "fund": [1, 2], "from": [1, 2, 3, 4, 5, 6], "1990": [1, 5], "2010": [1, 3], "onli": [1, 2, 3], "those": [1, 3, 5], "which": [1, 2, 3, 5, 6], "still": [1, 2, 3, 5], "exist": [1, 2, 3, 4, 5], "present": [1, 3, 4, 5, 6], "alreadi": [1, 2, 3, 4, 5], "impli": [1, 2], "certain": [1, 3], "degre": [1, 2], "monetari": 1, "sucess": 1, "avail": [1, 2, 3, 4, 5, 6], "anytim": 1, "conveni": [1, 2, 3], "instead": [1, 5], "best": [1, 2, 4, 5, 7], "one": [1, 2, 3, 4, 5, 6, 7], "outlier": [1, 3], "emploi": [1, 3], "summari": [1, 5], "statist": [1, 2, 3, 4, 5], "mask": [1, 3], "overli": 1, "sensit": [1, 3, 4], "drive": [1, 6], "For": [1, 2, 3, 4, 5], "more": [1, 2, 3, 4, 5, 7], "type": [1, 5], "explain": [1, 3, 6], "fair": 1, "just": [1, 2, 3, 5], "lack": [1, 2, 3, 5], "But": [1, 2, 3, 4, 5], "creat": [1, 2, 3, 5], "while": [1, 2, 3, 4, 5, 6], "qualiti": [1, 2, 3, 4], "mai": [1, 2, 3, 5, 6], "appar": [1, 2, 3], "attribut": [1, 2, 3, 5, 7], "possess": 1, "immedi": [1, 3], "obviou": [1, 3], "an": [1, 2, 4, 5, 6], "ideal": [1, 2, 3], "look": [1, 2, 3, 5], "collect": [1, 2, 5], "when": [1, 2, 3, 4, 6, 7], "describ": [1, 2, 3, 5], "think": [1, 2, 3, 4, 6], "about": [1, 2, 3, 5, 7], "experi": [1, 2, 4], "valid": [1, 3], "hypothes": [1, 2], "draw": [1, 3], "infer": 1, "etc": [1, 2, 3, 5], "These": [1, 2], "critic": [1, 3], "applic": [1, 3, 4], "thei": [1, 2, 3, 4, 5], "share": [1, 2, 3, 5, 6], "foundat": 1, "element": [1, 5], "reli": 1, "Then": [1, 2, 3, 5], "thi": [0, 1, 2, 3, 4, 5, 7], "addit": [1, 2, 3], "ultim": [1, 2], "exact": [1, 2], "go": [1, 2, 3, 5], "depend": 1, "field": [1, 2], "particular": [1, 2, 5], "howev": [1, 3, 4, 5, 6], "consider": [1, 3, 4], "previous": [1, 3], "dicuss": [1, 2], "In": [1, 2, 3, 4, 5], "re": [1, 2, 3, 5], "each": [1, 2, 3, 5, 6, 7], "impact": [1, 2, 3, 7], "creation": [1, 5], "ross": [1, 2], "d": [1, 2, 3], "omest": [1, 2], "p": [1, 2, 3, 5], "roduct": 1, "quick": [1, 2, 3, 5, 6], "interact": [1, 3, 6], "term": [1, 3, 6], "take": [1, 2, 3, 5, 6], "below": [1, 3, 6], "otherwis": [1, 4], "feel": [1, 5, 6], "free": [1, 5, 6], "move": [1, 6], "onto": 1, "next": [1, 3, 4], "jump": [1, 3], "refer": [1, 2, 3, 4, 5, 6], "assess": [1, 2, 3, 4], "specif": [1, 2, 3], "wider": 1, "databas": 1, "third": [1, 3], "parti": 1, "vendor": [1, 2], "curat": 1, "structur": [1, 2, 3, 4, 5], "other": [1, 2, 3, 4, 5], "influenc": [1, 2, 3, 7], "let": [1, 2, 3, 4, 5], "see": [1, 2, 3, 5, 6], "librari": [1, 2, 5], "os": [1, 2, 3, 5], "file": [1, 2, 3, 5, 6], "manag": [1, 2, 3, 5], "access": [1, 2, 3, 5, 6], "pd": [1, 2, 3, 5], "intak": [1, 2, 3, 5], "manipul": [1, 2, 3, 5], "pyplot": [1, 2, 3], "plt": [1, 2, 3], "custom": [1, 2, 5], "visual": [1, 2, 3], "retriev": [1, 2, 3, 5], "detail": [1, 2], "scienc": [1, 2, 3, 4, 5], "job": 1, "salari": 1, "http": [1, 2, 3, 5, 7], "www": [1, 3], "kaggl": [1, 3], "com": [1, 2, 3, 5], "ruchi798": 1, "download": 6, "home_dir": [], "path": [], "dirnam": [], "getcwd": [], "data_path": [], "sep": [], "sample_dataset": [1, 2, 3, 5], "ds_salari": 1, "csv": [1, 2, 3, 5], "read_csv": [1, 2, 3, 5], "encod": [1, 2, 3, 5], "utf": [1, 2, 3, 5], "8": [1, 5, 6], "get": [1, 2, 3, 5], "few": [1, 2, 5], "entri": [1, 3], "print": [1, 2, 3, 5], "head": [1, 2, 3, 5], "5": [1, 5, 6], "differ": [1, 2, 3, 5, 6], "doe": [1, 2, 3, 5], "list": [1, 2, 3, 5], "column": [1, 2, 3, 5], "level": [1, 2, 3, 5, 7], "expr_lvl_data": 1, "experience_level": 1, "value_count": 1, "sort_index": 1, "ascend": 1, "fals": 1, "bar": 1, "index": [1, 2, 3, 5], "valu": [1, 2, 3, 5], "bar_label": 1, "discuss": [1, 6], "base": [1, 2, 3, 5], "chart": [1, 3], "were": [1, 2, 3, 5], "comput": [1, 3, 5], "mean": [1, 2, 3, 4, 5], "median": [1, 3], "2020": 1, "kind": 1, "issu": [1, 5, 6], "might": [1, 2, 3, 5, 6], "overlook": [1, 2], "Is": [1, 2, 4], "anyth": 1, "fundament": [1, 5], "wrong": 1, "calcul": [1, 2, 5], "chose": [1, 2], "rectifi": 1, "complet": [1, 2, 3, 5, 6], "chosen": [1, 3], "across": [1, 2, 3], "given": [1, 2, 3, 4, 5], "dimens": [1, 3, 4], "time": [1, 2, 3, 4, 5, 6], "conduct": [1, 2, 3, 5], "biweekli": 1, "metric": [1, 3, 4], "year": [1, 2, 3, 5], "26": 1, "appropri": [1, 2, 3], "space": 1, "respect": [1, 2, 3], "although": [1, 3, 5, 6], "intuit": 1, "color": [1, 2, 3], "locat": 1, "price": [1, 3], "desir": [1, 2, 3, 5], "criteria": [1, 2, 3], "incomplet": [1, 3], "limit": [1, 2, 3, 4], "scope": [1, 3, 5], "method": [1, 5], "imput": [1, 3, 5], "miss": [1, 3, 5], "climat": [1, 2], "delhi": 1, "sumanthvrao": 1, "daili": 1, "daily_delhi_clim": 1, "check": [1, 3, 5, 6], "info": [1, 2], "provid": [1, 2, 3, 5, 6], "concis": [1, 5], "datafram": [1, 3, 5], "insight": 1, "dispers": 1, "shape": [1, 2, 3], "distribut": 1, "temperatur": 1, "april": [1, 2], "subset": [1, 2, 3, 5], "date": [1, 2, 3, 5, 7], "meantemp": 1, "filter": [1, 2], "row": [1, 3, 5], "occur": [1, 3], "april_start_end_idx": 1, "4": 1, "1": [1, 6, 7], "2013": [1, 3], "30": [1, 2, 3, 5], "tolist": [1, 3, 5], "april_only_data": 1, "scatterplot": 1, "plot": [1, 2, 3], "format": [1, 2, 3, 5], "option": [1, 2, 3, 5, 6], "readabl": [1, 5], "xtick": [1, 2, 3], "rotat": [1, 2, 3], "45": [1, 3, 5], "fontsiz": [1, 2, 3], "6": [1, 5, 6], "ylim": 1, "20": [1, 2, 3], "35": [1, 3], "xlabel": [1, 2, 3], "ylabel": [1, 2, 3], "c": [1, 3, 5], "displai": 1, "show": [1, 6], "scatter": [1, 2, 3], "If": [1, 2, 3, 4, 5, 6], "try": [1, 2, 3, 4, 5], "affect": [1, 3], "could": [1, 2, 3, 4, 5], "point": [1, 2, 4, 5, 6], "discontinu": [1, 3, 5], "better": [1, 2, 3, 4, 6], "than": [1, 2, 3, 5, 6], "proxim": [1, 4], "util": [1, 3, 4, 5], "moment": [1, 3, 4], "relev": [1, 3, 4, 5], "project": [1, 2, 3, 4, 5], "establish": [1, 2, 3, 5], "utliz": 1, "contemporan": 1, "timefram": [1, 2, 3], "i": [1, 2, 3, 5], "promin": 1, "topic": [1, 2, 3, 4], "1970": [1, 4], "textbook": [1, 4], "should": [1, 2, 3, 4], "text": [1, 3, 4, 5, 6], "corpu": [1, 4], "1950": [1, 4], "case": [1, 3, 5], "predict": [1, 3, 4], "especi": [1, 2, 3, 4, 5], "potenti": [1, 2, 3, 4], "wildfir": 1, "hotspot": 1, "demand": [1, 2, 3], "updat": [1, 4, 5], "To": [1, 2, 3, 5, 6], "end": [1, 2, 3, 4, 5], "becom": [1, 3, 5], "appear": [1, 2, 3, 6], "product": [1, 2, 3], "later": [1, 2, 3], "guarante": [1, 5], "develop": [1, 2, 3, 4, 5], "coincid": [1, 3, 5], "indic": [1, 3, 4], "up": [1, 2, 3, 5, 6, 7], "hospit": 1, "capac": [1, 3], "sf": 1, "covid": 1, "19": 1, "catalog": 1, "gov": 1, "covid19_hospital_capac": 1, "alwai": [1, 2, 5], "sampl": [1, 3, 5], "suppos": [1, 2, 3, 5], "concern": [1, 3], "intens": [1, 3], "care": 1, "bed": 1, "avail_ic_b": 1, "statu": 1, "sort": [1, 2], "sort_valu": [1, 3], "ignore_index": [1, 3], "true": [1, 3], "latest": 1, "tail": [1, 2, 3], "15": [1, 2, 3, 5], "count": [1, 5], "where": [1, 2, 3, 5], "number": [1, 2, 3, 5, 6], "todai": 1, "altern": [1, 2], "solut": 1, "task": [1, 5], "t": [1, 2, 3, 4, 5], "approxim": 1, "somehow": 1, "One": [1, 2, 3], "econom": [1, 2, 3], "greatest": [1, 3], "hit": [1, 5], "rest": 1, "haven": [1, 3], "refresh": [], "here": [1, 2, 3, 5, 6, 7], "rundown": 1, "total": [1, 3, 5], "market": 1, "finish": [1, 6], "good": [1, 3, 5], "servic": [1, 2], "produc": 1, "within": [1, 2, 3], "countri": 1, "border": 1, "period": [1, 2, 3], "overal": 1, "health": [1, 2], "larg": [1, 7], "scale": [1, 3], "social": [1, 2, 3], "inquiri": 1, "form": [1, 2], "nomin": [1, 2, 3], "measur": [1, 2, 3, 4, 5], "fix": [1, 3], "estim": [1, 3, 4], "under": [1, 5], "condit": [1, 2], "steadi": 1, "currenc": 1, "low": [1, 3], "inflat": [1, 2], "full": [1, 3], "employ": [1, 2], "per": [1, 5], "capita": 1, "divid": [1, 3, 4, 5, 6], "person": [1, 2, 3, 5], "set": [1, 3, 5, 6], "timeseri": [1, 2, 3], "longitudin": 1, "studi": 1, "usual": [1, 4, 5], "publish": [1, 2, 4], "lag": 1, "q2": [1, 2], "wasn": [1, 5], "offici": [1, 2, 4], "releas": [1, 2, 5], "until": [1, 5], "q3": [1, 4], "post": [1, 2, 4, 5], "numer": [1, 3], "agenc": [1, 2], "entiti": [1, 2], "govern": [1, 2], "relat": [1, 2, 3, 4, 5], "multipl": [1, 5], "approach": [1, 3, 5], "expenditur": [1, 2], "incom": [1, 2], "As": [1, 2, 3, 4, 5], "soon": 1, "lend": [1, 2], "itself": [1, 2, 5, 6], "inher": [1, 3, 5], "readi": [1, 2, 3], "The": [2, 3, 4, 5, 6, 7], "modern": [2, 5], "landscap": 2, "ha": [2, 3, 5], "much": [2, 3, 5], "realli": [2, 5], "numpi": [2, 3], "begin": [2, 3], "without": [2, 3, 5], "s": [2, 3, 4, 5, 6], "trend": [2, 3], "identifi": [1, 2, 4, 7], "vast": 2, "overwhelm": 2, "x": [2, 3, 4, 5], "dataset": [2, 4, 5, 7], "almost": [2, 3, 5], "multitud": 2, "privat": 2, "organ": 2, "licens": 2, "open": [2, 6], "matter": 2, "whose": 2, "absolut": [2, 5], "essenti": [2, 4], "analys": 2, "cook": 2, "acquir": 2, "ingredi": 2, "whether": [2, 3], "recip": 2, "thing": [2, 3, 5], "turn": 2, "well": [2, 3, 5, 6], "input": [2, 3, 5], "poor": 2, "even": [2, 5], "same": [2, 3, 5], "basic": 2, "meta": 2, "factor": [2, 3], "favor": 2, "first": [2, 3, 5], "popular": 2, "we": [2, 3, 4, 5, 6], "determin": [2, 5], "downstream": [2, 3, 7], "aris": [2, 3, 5], "attempt": [2, 3, 4, 5], "three": [2, 3, 6], "practic": [2, 5, 7], "futur": [3, 5], "sub": [2, 3, 5], "section": [2, 3, 6], "accompani": [2, 3], "It": [2, 3, 5], "suggest": [2, 3, 5, 6], "through": [2, 3, 5, 6], "them": [2, 3, 5], "order": [3, 6], "do": [2, 3, 4, 5, 6], "strictli": [3, 6], "scroll": [2, 6], "down": [2, 5, 6], "your": [2, 3, 4, 5], "web": 2, "browser": 2, "choic": [2, 3], "minut": [2, 3], "10": [2, 5], "100": [2, 3, 5], "clearli": 2, "despit": 2, "store": [2, 5], "what": [2, 3, 4], "circumst": 2, "solv": 2, "problem": [2, 3], "reason": [2, 3, 5], "talk": [2, 3, 5], "who": [2, 5], "yourself": [2, 5], "craft": 2, "now": [2, 3, 5], "consid": [2, 3, 4, 5], "choos": [2, 3, 6], "result": [2, 3, 5], "bureau": 2, "advisor": 2, "bea": 2, "datasets_dir": [], "bea_data": 2, "gdp_bea_q2_2022_adv": 2, "usabl": 3, "sound": [2, 3], "st": 2, "loui": 2, "feder": 2, "reserv": 2, "fred": [2, 3], "fred_data": 2, "gdp_fred": [2, 3], "random": [2, 3, 5], "websit": 2, "macrotrend": 2, "net": 2, "macrotrends_data": 2, "gdp_macrotrend": 2, "remot": [1, 2, 3, 5], "similar": [2, 3], "search": [2, 6], "among": 2, "easili": [2, 5], "simpl": [2, 3, 5], "lot": 2, "recent": [2, 3], "observ": [2, 3], "fred_data_subset": 2, "sure": [2, 3], "litt": 2, "read": [2, 3, 5], "abl": [2, 3, 5, 6], "axi": [2, 3, 5], "rel": [2, 3], "clean": 2, "contain": [2, 3, 5, 6], "two": [2, 3, 4, 5], "tempt": [2, 5], "ahead": [2, 3], "frequent": [2, 4, 5], "worth": [2, 5], "step": [2, 3], "back": [2, 3, 5], "dure": [2, 3], "individu": [2, 5], "own": [2, 3, 4, 5], "version": [2, 5], "perhap": 2, "credibl": [2, 3], "Or": [2, 6], "mayb": [2, 3], "off": [2, 3], "shoot": 2, "been": [2, 3, 5], "meaning": 2, "found": [2, 3], "notat": 2, "billion": 2, "dollar": [2, 3], "season": 2, "adjust": 2, "annual": 2, "rate": 2, "isn": [2, 3], "subject": [2, 4, 5], "reput": [2, 3, 4], "easier": [2, 3], "tool": 2, "less": [2, 3, 4, 5], "direct": [2, 3], "experiment": 2, "independ": [2, 3, 5], "queri": 2, "inform": [2, 3, 5], "respons": [2, 3], "its": [2, 3, 4, 5, 6], "public": 2, "labor": 2, "raw": [1, 2, 3, 5], "our": [2, 3, 5], "datasourc": 2, "wa": [2, 3, 5, 6], "idea": [2, 3], "trace": [], "after": [2, 3, 4, 5], "equal": 2, "remain": [2, 6], "co": 2, "opt": [2, 4, 5], "bank": 2, "oecd": 2, "organis": 2, "oper": [1, 2, 3], "nation": 2, "account": [2, 6], "okai": 2, "trust": 2, "me": [2, 5], "fairli": [2, 3, 5], "ve": [2, 3, 5], "done": [2, 3, 6], "initi": [2, 4, 5, 7], "inspect": 2, "summar": 2, "know": [2, 3, 5], "return": [2, 3, 5], "origin": [2, 3, 5], "question": [1, 2, 3, 4, 5], "underli": 2, "tabl": [2, 3, 6], "characterist": 2, "notabl": [2, 3], "featur": 2, "cross": 2, "sector": 2, "1947": 2, "worldbank": 2, "intern": 2, "bodi": 2, "1960": 2, "add": [2, 3, 5, 6], "calc": 2, "chang": [1, 3, 4, 5], "come": [2, 3, 5], "similarli": [2, 3], "And": [2, 3, 4, 5], "notic": [2, 3, 5, 6], "vagu": 2, "intention": 2, "promis": 2, "becaus": [2, 5], "requir": [2, 3, 4, 5], "breakdown": 2, "transform": [2, 3], "aka": 2, "panel": [2, 3], "merg": [2, 3], "need": [2, 3, 4, 5], "slightli": [2, 5], "richer": 2, "figur": [2, 3, 5], "ask": [2, 5], "traceback": 2, "verfic": 2, "rather": [2, 3, 5], "consum": [2, 5], "feasibl": 2, "ground": 2, "There": [2, 3, 6], "hundr": [2, 5], "thousand": [2, 5], "quicker": [2, 5], "preliminari": 2, "viabil": 2, "wouldn": [2, 5], "believ": [2, 5], "intend": [2, 3], "note": [2, 3, 4, 6], "bit": 2, "awkward": 2, "name": [2, 5], "A": [4, 6], "non": [2, 3], "exhaust": 2, "academ": 2, "student": 2, "professor": 2, "aid": 2, "lab": [2, 6], "reserach": [2, 3], "institut": [2, 3], "government": 2, "state": 2, "local": [2, 3, 5, 6], "bureaucrat": 2, "depart": 2, "associ": [2, 3, 4], "dept": 2, "defens": 2, "nasa": 2, "u": 2, "n": [2, 3], "commer": 2, "compani": 2, "corpor": 2, "espeic": 2, "advisori": 2, "consult": [2, 3, 4, 7], "firm": 2, "forward": [2, 3], "reseach": 2, "caveat": [2, 3], "aren": 2, "necessarili": [2, 3], "concept": [2, 5, 6], "welcom": 2, "certainli": [2, 3], "forthcom": 2, "encourag": [2, 3, 6], "appli": [2, 3, 4, 7], "expedit": 2, "belong": [2, 3, 5], "dive": [2, 5], "everyth": [2, 5], "carrot": 2, "someth": [2, 3, 5], "answer": [2, 3], "myself": 2, "did": [2, 3, 5], "gave": 2, "rise": [2, 3], "place": [2, 3, 5], "brainstorm": 2, "boost": 2, "secur": 2, "tenur": 2, "scoop": 2, "competitor": 2, "causal": 2, "relationship": [2, 3, 4], "___": 2, "jockei": 2, "authorship": [], "posit": 2, "commonli": [2, 3], "align": 2, "supervis": [2, 3], "faculti": 2, "lobbi": 2, "spend": [2, 3, 4], "effort": [2, 3], "demonstr": [2, 6], "vulner": 2, "sanction": 2, "coalit": 2, "build": [2, 4], "coordin": 2, "polici": 2, "commerci": 2, "financi": 2, "analyst": 2, "invest": 2, "improv": [2, 7], "perceiv": 2, "extern": [2, 3, 5], "clientel": 2, "discov": 2, "delet": 2, "hopefulli": [2, 3], "consciou": 2, "unconsci": 2, "underpin": 2, "knowledg": 2, "keep": [2, 5], "mind": [2, 5], "support": [2, 5], "suffer": 2, "failur": 2, "basi": [2, 3], "strength": [2, 3], "relatedli": 2, "newsworthi": 2, "interest": [2, 3, 4, 5], "anomali": 2, "egregi": 2, "conflict": 2, "petroleum": 2, "logic": [2, 3], "maintain": 2, "weak": 2, "prefer": [2, 4], "recommend": [2, 3, 4], "orthogon": 2, "current": [2, 6], "cancer": 2, "risk": 2, "covari": 2, "anoth": [2, 3, 5, 6], "propos": 2, "link": [2, 3], "sedentari": 2, "Of": [2, 3, 5], "special": 2, "fact": [2, 3, 5], "both": [2, 3, 5], "over": [2, 3, 5, 6], "exampl": [2, 5, 6], "zoom": [2, 3], "contribut": [2, 3, 6], "portion": [2, 6], "small": 5, "busi": 5, "spearhead": 2, "administr": [2, 3], "report": 3, "2007": [2, 3], "1998": [2, 5], "2004": [2, 3], "decemb": 2, "2017": [2, 5], "2014": 2, "part": [2, 3, 7], "percentag": [2, 3], "overlap": 2, "expect": 2, "dramat": 2, "np": [2, 3, 5], "viz": [2, 3], "AND": [], "sgdp_data": 2, "sgdp_sba": 2, "header": [2, 6], "index_col": 2, "2017_report_sgdp_shar": 2, "2007_report_sgdp_shar": 2, "label": [2, 3, 5], "OF": 2, "limegreen": [2, 3], "blue": 2, "fit": [2, 3], "line": [2, 3, 5, 6], "xval": 2, "yval": 2, "loc": [2, 3], "linewidth": 2, "linestyl": [2, 3], "seagreen": 2, "b": [2, 3, 4, 5], "polyfit": 2, "steelblu": [2, 3], "titl": [2, 5], "vs": 2, "farm": 2, "legend": [2, 3], "upper": [2, 3], "right": [2, 3, 6], "tight_layout": [2, 3], "major": [2, 5], "discrep": 2, "offer": [2, 3, 5], "review": [1, 2, 3, 4, 6], "direction": 2, "opposit": 2, "aim": 2, "caus": 2, "granular": 2, "switch": [2, 5], "suspect": 2, "shift": [2, 6], "recal": [2, 5], "plai": [2, 7], "whistleblow": 2, "elect": 2, "great": [2, 3, 5], "claim": 2, "investig": [2, 3], "decad": 2, "recess": 2, "short": [2, 3, 6], "give": [2, 3], "drastic": 2, "misreport": 2, "final": [2, 3, 4, 5], "simpli": [2, 3, 5], "methodolog": 2, "sinc": [2, 3, 5], "either": [2, 3], "credenc": 2, "grappl": 2, "thought": [1, 2, 3], "accept": [2, 5], "instruct": [2, 5, 6], "match": [2, 3], "theirs": 2, "sum": [2, 5], "ad": [2, 3, 4, 5], "stage": [2, 3, 5], "sale": 2, "minu": 2, "intermedi": 2, "purchas": 2, "made": [2, 3], "user": [1, 2, 3, 5, 6], "consumpt": 2, "household": 2, "gover": 2, "foreign": 2, "compens": 2, "employe": 2, "receiv": [2, 3], "surplu": 2, "theori": [2, 5], "simplifi": 2, "economi": 2, "everi": [2, 3, 5], "spent": [2, 5], "neatli": 2, "captur": 2, "diagram": 2, "shown": 2, "introductori": 2, "class": [2, 3, 5], "circular": 2, "flow": [2, 3], "shall": 2, "page": [2, 6], "gdi": [], "ncome": 2, "theoret": 2, "hold": 2, "gdp_approaches_data": 2, "gdp_diff_approach": 2, "marker": [2, 3], "o": [2, 3, 5], "appr": 2, "left": [2, 3, 6], "seem": [2, 3, 5], "pictur": 2, "diff": 2, "gdp_diff": 2, "dodgerblu": 2, "axhlin": 2, "y": [2, 3, 4], "red": 2, "past": [2, 5], "fiscal": 2, "quarter": [2, 3, 4, 6], "consis": 2, "500": 2, "greater": [2, 3], "accuraci": [2, 3], "timeli": [2, 3, 7], "diverg": [2, 5], "instanc": [2, 3, 4], "save": 2, "cash": 2, "reflect": 2, "inflationari": 2, "worsen": 2, "familiar": [2, 4], "thu": [2, 3], "substanti": 2, "readili": [2, 3, 4], "imagin": [2, 3, 5], "exagger": 2, "typic": [2, 3, 5], "deflat": 2, "increas": [3, 5], "influx": 2, "depict": 2, "stronger": 2, "actual": [2, 5, 6], "recoveri": 2, "scenario": [2, 4], "seek": [2, 5], "justif": 2, "es": 2, "strongest": 2, "possibl": [2, 3, 5], "vari": [2, 5], "applicabl": 2, "abil": 2, "conting": [2, 5], "behavior": 2, "mass": 2, "valuabl": 2, "wish": [2, 3], "new": [2, 3, 5, 6], "requisit": 2, "rigor": 2, "dessert": 2, "meal": 2, "round": [2, 3, 5], "rememb": [2, 3, 5], "criterion": 2, "verifi": 2, "reliabl": 2, "quickli": [2, 3, 5], "foreshadow": 2, "implic": 2, "Be": 2, "fortifi": 2, "usag": 2, "Not": [3, 6], "comment": 3, "call": [3, 5], "uncom": [1, 2, 3, 5], "dateutil": 3, "parser": 3, "datetim": 3, "click": [0, 3, 6], "yet": [3, 5], "encount": 3, "hope": [3, 5], "natur": [3, 5], "priorit": 3, "author": [3, 6], "unfortun": 3, "obstacl": 3, "besid": 3, "barrier": 3, "paywal": 3, "delight": 3, "children": 3, "classic": [3, 5], "goe": [3, 5], "rang": [3, 5], "pertin": 3, "address": [3, 5, 6], "di": [3, 4, 7], "identif": 3, "comprehens": [3, 5], "why": 3, "my": [3, 5, 6], "around": 3, "primari": 3, "focu": 3, "un": 3, "hoc": [3, 4], "cours": 3, "properli": 3, "tricki": 3, "unintention": 3, "write": [3, 5], "handl": [3, 5], "schedul": [3, 4, 7], "gdp": [4, 5], "entir": 3, "veri": [3, 5], "regard": 3, "particip": 3, "timeslic": 3, "practi": [], "nonetheless": 3, "tangibl": 3, "effect": 3, "correctli": 3, "enabl": 3, "accur": [3, 4], "incorrectli": 3, "skew": 3, "wors": [3, 5], "invalid": [3, 5], "systemat": [3, 7], "broaden": 3, "advis": 3, "broadli": [3, 4, 5], "classifi": [3, 5], "categori": [3, 4], "omiss": 3, "exclus": 3, "nativ": [3, 5], "permiss": 3, "extrapol": 3, "whatev": 3, "between": [3, 4], "quantit": 3, "versu": 3, "qualit": [3, 4], "commun": 3, "confid": 3, "said": 3, "nbsp": [], "avoid": [3, 4, 5], "pothol": 3, "edit": 3, "programat": [3, 5], "command": [3, 5], "skip": 3, "omit": 3, "na": 3, "nan": 3, "dimension": [3, 5], "definit": [3, 5], "benefit": 3, "drawback": [3, 5], "pro": 3, "con": 3, "strategi": 3, "conspicu": 3, "asterisk": 3, "prefix": 3, "disadvantag": 3, "notebook": [3, 5], "anywher": 3, "convinc": 3, "least": [3, 5], "partial": 3, "mitig": [3, 4], "intellig": 3, "intent": 3, "design": 5, "prior": [3, 4, 6], "further": [3, 4], "ing": 3, "master": 3, "def": [3, 5], "toi": 3, "master_data": 3, "2008": 3, "puzzl": 3, "nerf": 3, "footbal": 3, "2012": 3, "game": 3, "consol": 3, "construct": [3, 5, 7], "df": 3, "dai": 3, "list_toys_receiv": 3, "len": [3, 5], "don": [3, 5], "els": 3, "birthdai": 3, "got": 3, "2009": 3, "2011": 3, "rescu": 3, "add_df": 3, "cloth": 3, "mobil": 3, "phone": 3, "mechan": [3, 5], "franken_df": 3, "concat": 3, "ts_data": 3, "2000": 3, "43": 3, "2001": 3, "2002": 3, "none": 3, "2003": 3, "39": 3, "44": 3, "2005": 3, "2006": 3, "52": [3, 5], "spin": 3, "amount": 3, "ones": [3, 5], "val": 3, "to_list": 3, "idx": [3, 5], "enumer": 3, "averag": [3, 5], "adjac": 3, "isna": 3, "separ": 3, "ideolog": 3, "merit": 3, "unlik": 3, "divis": 3, "incompat": 3, "purpos": [3, 6], "tag": 3, "team": 3, "hip": 3, "hop": 3, "singl": [3, 5, 6], "decid": 3, "inaccuraci": 3, "tractabl": 3, "orient": 3, "counterpart": 3, "mi": [], "repeat": 3, "denot": [3, 5], "aggreg": 3, "downsampl": [], "reduc": 3, "resolut": 3, "monthli": 3, "quarterli": 3, "upsampl": [], "weekli": 3, "exactli": 3, "mathemat": [3, 5], "rd": [3, 5], "noth": [3, 5], "suspici": 3, "directori": [1, 2, 3, 5], "inconspicu": 3, "anywai": [3, 5], "cyberattack": 3, "truli": [3, 5], "nefari": 3, "stuff": [3, 5], "rand_idx": [3, 5], "seed": [3, 5], "123": 3, "replicabl": 3, "friendli": [3, 5], "qoq_gdp_data": 3, "reset_index": 3, "drop": 3, "oh": 3, "plan": 3, "enemi": 3, "scientist": 3, "misinform": 3, "conjectur": 3, "qoq_gdp_damag": 3, "somewhat": 3, "contriv": 3, "presenc": 3, "agre": 3, "unreason": 3, "occurr": 3, "happen": [3, 5], "qoq": 3, "consist": [3, 5, 6], "qualif": 3, "asid": [3, 5], "hard": [3, 4], "er": 3, "ihsmarkit": 3, "html": [3, 5], "mom_gdp": 3, "monthly_gdp": 3, "estmat": 3, "real_gdp": 3, "monthly_real_gdp": 3, "inplac": 3, "patch": 3, "must": [3, 4, 5], "minimum": 3, "maximum": 3, "randomli": 3, "regim": 7, "fun": [3, 5], "filler": 3, "rodin": 3, "hi": 3, "parent": 3, "mull": 3, "arriv": 3, "satisfactori": 3, "meant": 3, "juli": 3, "1st": 3, "therefor": [3, 5], "unrel": 3, "novic": [], "univers": 3, "close": [3, 6], "retriv": 3, "reporting_d": 3, "correspond": 3, "resampled_mom_gdp": 3, "isin": 3, "qoq_gdp_fil": 3, "lambda": [3, 5], "monthly_nominal_gdp": 3, "visibl": 3, "alpha": 3, "huzzah": 3, "celebr": 3, "happi": 3, "recap": 3, "reknown": 3, "partier": 3, "programmat": 3, "straightforward": 3, "copi": [3, 6], "nuanc": 3, "thoughtfulli": 3, "frequenc": 3, "scheme": 3, "That": 3, "quit": 3, "mention": 3, "strang": 3, "eventu": 3, "convenin": 3, "had": 3, "slice": 3, "dateset": 3, "2018": 3, "12": [3, 5], "11456": 3, "37": [3, 5], "TO": 3, "mom": 3, "9434": 3, "78": 3, "12346": 3, "25": [3, 5], "11774": 3, "38": 3, "10409": 3, "21": 3, "13879": 3, "53": 3, "unless": 3, "ly": 3, "intermediari": 3, "directli": [3, 5], "awar": [3, 5], "interpol": 3, "contrast": [], "statis": 3, "algorithm": [3, 5], "glrm": 3, "rank": 3, "simultan": 3, "surround": 3, "datapoint": [3, 5], "optim": 3, "program": [3, 5], "won": 3, "saw": [3, 5], "upon": [3, 5], "fruit": 3, "abstractli": 3, "deepli": 3, "examin": 3, "generaliz": [3, 7], "hand": [3, 5], "precis": 3, "upcom": 3, "At": 3, "high": 3, "output": [3, 5], "forecast": 3, "complex": [3, 5], "skill": 3, "pi": 3, "princip": 3, "bunch": [3, 5], "ga": 3, "agp": [], "wise": [3, 5], "caution": 3, "exhibit": 3, "strong": 3, "correl": 3, "throw": 3, "routin": 3, "mildli": 3, "mif": 3, "didn": [3, 5], "send": 3, "pars": 3, "string": [3, 5], "hous": [], "mruanova": 3, "gasolin": 3, "diesel": 3, "retail": 3, "19952021": 3, "gas_pric": 3, "gas_gas_ga": 3, "variabl": [3, 5], "rdinari": 3, "l": [3, 5], "east": 3, "quar": 3, "uninit": 3, "varibl": 3, "linear": [], "function": [3, 5], "beta_1": [], "beta_0": [], "predictor": 3, "r": 3, "variat": 3, "beta": [], "paramet": 3, "excel": 3, "guid": 3, "find_start_end_indic": 3, "start_dat": 3, "end_dat": 3, "last": [3, 5], "start_idx": 3, "end_idx": 3, "j": 3, "31": 3, "gas_start_idx": 3, "gas_end_idx": 3, "gdp_start_idx": 3, "gdp_end_idx": 3, "iloc": 3, "view": [1, 2, 3, 5, 6], "ed": [3, 5], "sklearn": 3, "linear_model": 3, "linearregress": 3, "gas_x_val": 3, "r1": 3, "reshap": 3, "gdp_y_val": 3, "gdp_gas_ol": 3, "avg": [3, 5], "regular": 3, "grade": 3, "formul": 3, "ah": 3, "error": 3, "log": 3, "valueerror": 3, "inconsist": 3, "213": 3, "49": 3, "inde": 3, "num_gas_pric": 3, "num_gdp": 3, "pai": 3, "extra": 3, "attent": 3, "seen": 3, "wherea": [3, 5], "week": 3, "month": 3, "accordingli": 3, "littl": [3, 5], "m": [3, 5], "technic": 3, "14": [3, 5], "28": 3, "18": 3, "109": 3, "068": 3, "017": 3, "977": 3, "978": 3, "96": 3, "14802": 3, "17": 3, "14627": 3, "57": 3, "truth": 3, "told": 3, "phrase": 3, "compat": 3, "technieu": [], "tranform": 3, "backward": 3, "convert": [3, 5], "gas_data_d": 3, "to_datetim": 3, "infer_datetime_format": 3, "gdp_data_d": 3, "replac": [3, 5], "counter": 3, "clever": 3, "merge_asof": 3, "both_weekly_data": 3, "monthly_gas_pric": 3, "convent": 3, "length": [3, 6], "nice": [3, 5], "both_monthly_data": 3, "get_r2": 3, "freq": 3, "r_sq": 3, "score": [3, 5], "r2": 3, "4f": 3, "yearli": 3, "both_quarterly_data": 3, "q": 3, "both_yearly_data": 3, "4258": 3, "4320": 3, "4426": 3, "5965": 3, "wow": 3, "pretti": [3, 5], "40": 3, "nearli": [3, 5], "60": [3, 5], "compress": 3, "lose": 3, "inclus": 3, "rose": 3, "rapidli": 3, "induc": 3, "heavili": [3, 6], "longer": [3, 5], "frame": 3, "allow": [3, 5], "extract": 3, "temporari": 3, "fluctuat": 3, "compon": [3, 6], "sens": [3, 5], "togeth": [3, 5], "higher": 3, "obtain": [3, 5], "gain": [3, 5], "assum": 3, "fill_forward": 3, "artifici": 3, "insensit": 3, "lowest": 3, "though": [3, 4, 5], "happili": 3, "By": 3, "implicitli": 3, "weight": 3, "transfer": 3, "averg": 3, "nearest": 3, "neighbor": 3, "dial": 3, "onc": [3, 5], "zero": [3, 5], "infti": [], "fast": [3, 4, 5], "execut": [3, 5, 6], "easi": [3, 5], "meaningfulli": 3, "advic": 3, "wrap": 3, "aspect": 3, "On": [3, 6], "system": 3, "classif": 3, "principl": 3, "augment": 3, "protocol": 3, "strengthen": 3, "pre": [3, 5], "dampen": 3, "signal": [3, 4], "No": 4, "yai": [], "briefli": 4, "except": [4, 5], "promient": 4, "highschool": 4, "former": 4, "mostli": 4, "exercis": [4, 6], "highli": 4, "sourc": [4, 7], "continu": [4, 5, 6, 7], "gap": [4, 5], "rule": [3, 4], "tradeoff": 4, "deriv": 4, "crucial": 4, "2021": 4, "q4": 4, "advanc": 4, "weren": 4, "credit": 4, "card": 4, "quantifi": 4, "iter": [4, 5], "remedi": 4, "conclud": 4, "gearup": [1, 2, 3, 4, 5, 6], "materi": [0, 4, 6], "stai": [4, 5], "thank": [4, 6], "dealt": 5, "standard": 5, "1000": 5, "stanford": [5, 6, 7], "sherlock": 5, "ridicul": 5, "power": [5, 6], "chew": 5, "deal": 5, "massiv": 5, "With": 5, "runtim": [5, 7], "constraint": 5, "progress": 5, "script": 5, "written": 5, "suboptim": 5, "defint": 5, "situat": 5, "heard": 5, "7": [5, 6], "11": 5, "scalar": 5, "pair": 5, "operand": 5, "processor": 5, "carri": 5, "concurr": 5, "previou": 5, "congratul": 5, "mine": 5, "wonder": 5, "flexibl": 5, "idiom": 5, "slow": 5, "dynam": 5, "compil": 5, "bytecod": 5, "object": [5, 6], "int": 5, "rock": 5, "dict": 5, "dictionari": 5, "overhead": 5, "resolv": 5, "repeatedli": 5, "significantli": 5, "static": 5, "languag": 5, "recur": 5, "cost": 5, "compel": 5, "programm": 5, "explicitli": 5, "translat": 5, "layer": 5, "interoper": 5, "arrai": 5, "instanti": 5, "confus": 5, "conductor": 5, "sai": 5, "str": 5, "band": 5, "interrog": 5, "earlier": 5, "thereof": 5, "elig": 5, "anthoni": [5, 7], "land": 5, "gdp_data": 5, "1991": 5, "46": 5, "1992": 5, "48": 5, "1993": 5, "1995": 5, "55": 5, "1996": 5, "1997": 5, "63": 5, "1999": 5, "67": 5, "1994": 5, "gdp_x": 5, "four": 5, "insert": 5, "0": [], "percent_increas": 5, "append": 5, "revers": 5, "inelig": 5, "expand": 5, "000": 5, "24": 5, "enough": 5, "unit": 5, "chunk": 5, "fine": 5, "nonstandard": 5, "sign": [5, 6], "doubt": 5, "understood": 5, "tackl": 5, "premier": 5, "tabular": 5, "scientif": 5, "ndarrai": 5, "timer": 5, "timeit": 5, "ipython": 5, "jupyt": [5, 7], "magic": 5, "suffix": 5, "line_profil": 5, "verbos": 5, "cython": 5, "declar": 5, "symbol": 5, "id": 5, "wranglnig": 5, "song_df": 5, "unpopular_song": 5, "break": [5, 6], "unpopular": 5, "song": 5, "spotifi": 5, "track": 5, "artist": 5, "danceabl": 5, "energi": 5, "involv": 5, "defin": [], "silli": 5, "spit": 5, "anthony_scor": 5, "loud": 5, "mode": [5, 6], "tempo": 5, "speechi": 5, "music": 5, "coffe": 5, "caffeine_subscor": 5, "ear": 5, "eardrum_health": 5, "vibe_subscor": 5, "240": 5, "bonu": 5, "elev": 5, "talk_subscor": 5, "proprietari": 5, "baselin": 5, "naiv": 5, "invok": 5, "loopabl": 5, "tupl": 5, "786": 5, "ms": 5, "34": 5, "9": 5, "std": 5, "dev": 5, "half": 5, "second": 5, "sophist": 5, "speed": 5, "built": 5, "along": 5, "specifi": 5, "document": 5, "pydata": 5, "org": 5, "doc": 5, "api": 5, "350": 5, "effici": 5, "hood": 5, "difficult": 5, "margin": 5, "18x": 5, "storag": [1, 2, 3, 5], "ax": 5, "conduc": 5, "faster": 5, "83": 5, "352": 5, "\u00b5s": 5, "scoreboard": 5, "191": 5, "26x": 5, "429": 5, "51x": 5, "achiev": 5, "seriou": 5, "500x": 5, "known": 5, "lanugag": 5, "represent": 5, "pass": 5, "548": 5, "vect": 5, "34x": 5, "1434": 5, "31x": 5, "leav": 5, "speak": 5, "referenc": 5, "overload": 5, "accord": 5, "creativ": 5, "unwiedli": 5, "unavoid": 5, "pure": 5, "onlin": 5, "accomplish": 5, "adapt": [5, 6], "345": 5, "anthony_ifi": 5, "song_nam": 5, "chop": 5, "song_name_word": 5, "split": 5, "pick": 5, "randint": 5, "em": 5, "better_song_nam": 5, "join": 5, "test_num": 5, "1004": 5, "7942": 5, "8282": 5, "korean": 5, "angel": 5, "friend": 5, "song_name_list": 5, "track_nam": 5, "num": 5, "og_nam": 5, "anthony_nam": 5, "bet": 5, "blazingli": 5, "tri": 5, "decompos": 5, "smaller": 5, "func": 5, "constitu": 5, "name_word": 5, "num_word": 5, "word_count": 5, "wc": 5, "name_words_w_anthoni": 5, "reconstruct": 5, "substr": 5, "map": 5, "196": 5, "decomposit": 5, "mileag": 5, "mix": 5, "dtype": 5, "regex": 5, "memori": 5, "Their": 5, "syntax": 5, "f": 5, "seq": 5, "surprisingli": 5, "modul": 5, "oppos": 5, "forget": 5, "humbl": 5, "doesn": [1, 2, 3, 5], "wast": 5, "ran": 5, "slower": 5, "modifi": 5, "sofia": 5, "heisler": 5, "her": 5, "pycon": 5, "enjoi": 5, "toolbox": 5, "mop": 5, "emori": 5, "ptimiz": 5, "rogram": 5, "calabl": 5, "gif": 5, "never": 5, "book": 7, "jupyterlab": [], "environ": [], "sidebar": 6, "launch": [0, 6], "visit": [6, 7], "regularli": [], "feedback": [], "github": [1, 2, 3, 5, 6], "repositori": 6, "eastbayev": [], "edu": [6, 7], "softwar": [], "rsvp": 7, "33mwarn": [], "ignor": [], "ensorflow": [], "evanmuzzal": [], "anaconda3": [], "lib": [], "python3": [], "site": 6, "0m": [], "33m": [], "0mrequir": [], "satisfi": [], "3": [6, 7], "2": 6, "pytz": [], "six": [], "16": [], "0mnote": [], "restart": [], "kernel": [], "pillow": [], "pypars": [], "fonttool": [], "22": [], "cycler": [], "kiwisolv": [], "downloadz": 1, "z": [], "import": [], "desktop": [], "messydata": [1, 2, 3, 5], "gear": 7, "regist": 7, "event": [], "legaci": 7, "945": 7, "94519": 7, "goal": [6, 7], "binder": [0, 1, 2, 3, 5, 6], "colab": [1, 2, 3, 5], "mkdir": [1, 2, 3, 5], "wget": [1, 2, 3, 5], "githubusercont": [1, 2, 3, 5], "roflauren": [1, 2, 3, 5], "main": [1, 2, 3, 5, 6], "fall_2022": [1, 2, 3, 5], "href": [], "youtub": [], "watch": [], "v": [], "l6mna_qzvhg": [], "wednesdai": 7, "octob": 7, "12th": 7, "pm": 7, "pst": 7, "role": 7, "contextu": [4, 7], "paradigm": 7, "weng": 7, "evan": 7, "muzzal": 7, "button": [0, 6], "chapter": [5, 6], "load": 6, "content": 6, "conceptu": 6, "introduct": 6, "vocabulari": 6, "center": 6, "arrow": 6, "brows": 6, "clickabl": 6, "top": 6, "rocketship": 6, "hover": 6, "mous": 6, "live": 6, "webpag": 6, "long": 6, "squar": [3, 6], "enter": 6, "fullscreen": 6, "press": 6, "escap": 6, "exit": 6, "octocat": 6, "toggl": 6, "navig": 6, "hide": 6, "hour": 6, "session": 6, "lectur": 6, "overview": 6, "variou": 6, "introduc": 6, "collabor": 6, "preview": 6, "prerequisit": 6, "collaps": [], "interfac": 6, "anaconda": 6, "editor": 6, "eas": 6, "extens": 6, "sunet": 6, "email": 6, "screen": 6, "colaboratori": 6, "connect": 6, "app": 6, "brown": 6, "orang": 6, "prompt": 6, "successfulli": 6, "ok": 6, "pop": 6, "window": 6, "badg": 6, "keyboard": 6, "cell": 6, "markdown": 6, "menu": 6, "folder": 6, "ipynb": 6, "tip": 6, "shortcut": 6, "food": 1, "operation": 2, "rich": 2, "intersect": 4, "robust": 4, "ness": 4, "manufactur": 4, "earn": 2, "hurri": 3, "default": 3, "\u03b21x": 3, "\u03b20": 3, "\u03b2": 3}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"gearup": 0, "messydata": 0, "chapter": [1, 2, 3, 4], "0": [1, 2, 3, 4, 5], "why": [1, 2, 5], "do": 1, "we": 1, "need": 1, "robust": 1, "data": [1, 2, 3, 4, 5, 7], "prerequisit": [1, 2, 3, 4, 5], "python": [1, 2, 3, 4, 5, 6], "import": [1, 2, 3, 4, 5], "what": [1, 5], "s": 1, "deal": 1, "defin": [1, 2, 3, 4, 5], "A": [1, 2, 3, 5], "work": [1, 6], "definit": 1, "sourc": [1, 2, 3], "exampl": [1, 3], "continu": [1, 3], "timeli": [1, 4], "workshop": [1, 6, 7], "essenti": 1, "gdp": [1, 2, 3], "dataset": [1, 3], "defint": 1, "usag": 1, "your": [1, 6], "typic": 1, "1": [2, 3, 4, 5], "prefac": [2, 3, 5, 6], "good": 2, "2": [2, 3, 4, 5], "issu": [2, 3], "3": [2, 3, 4, 5], "decid": 2, "between": 2, "multipl": 2, "author": 2, "code": [1, 2, 3, 5], "exercis": [2, 3, 5], "discuss": [2, 3, 4, 5], "conclus": [2, 3], "4": [2, 3, 5], "understand": [2, 7], "incent": 2, "purpos": 2, "5": [2, 3], "sgdp": 2, "6": [2, 3], "valid": 2, "gener": 2, "approach": 2, "7": [2, 3], "8": [2, 3], "comput": 2, "9": [2, 3], "takeawai": [2, 3, 4], "consequ": 3, "follow": 3, "best": 3, "practic": [3, 4], "remedi": 3, "gap": 3, "endo": 3, "exo": 3, "genou": 3, "fill": [3, 5], "exogen": 3, "method": 3, "resampl": 3, "cont": 3, "endogen": 3, "10": 3, "11": 3, "codf": 3, "wrangl": 3, "ol": 3, "regress": 3, "redux": 3, "construct": 4, "optim": 5, "via": 5, "vector": 5, "loop": 5, "iterrow": 5, "better": 5, "appli": 5, "basic": 5, "numpi": 5, "framework": 5, "non": 5, "numer": 5, "benefit": 5, "improv": 5, "welcom": 7, "taml": [], "thank": [], "you": 7, "everyon": [], "who": [], "particip": [], "pilot": [], "iter": [], "winter": [], "quarter": [], "2022": [], "stai": [], "tune": [], "next": [], "come": [], "soon": [], "messi": 7, "time": 7, "seri": 7, "brought": 7, "softwar": 7, "servic": 7, "scienc": 7, "ssd": 7, "green": 7, "librari": 7, "usabl": 2, "AS": 2, "metric": 2, "trace": 2, "authorship": 2, "applic": 2, "depend": [2, 3, 5], "AND": 2, "BY": [2, 3], "type": [2, 3, 4], "case": 2, "studi": 2, "small": 2, "busi": 2, "chang": 2, "IN": 2, "report": 2, "compar": [2, 3], "gdi": 2, "identifi": 3, "comprehend": 3, "OF": [3, 4, 5], "vs": 3, "select": 3, "regim": 3, "point": 3, "mi": 3, "align": 3, "design": 3, "an": 3, "context": 3, "agp": 3, "linear": 3, "refresh": [1, 3], "upsampl": 3, "downsampl": 3, "contrast": 3, "model": 3, "order": 5, "oper": 5, "tool": 5, "qualif": 5, "event": 7, "detail": 7, "contributor": 7, "appendix": 5, "motiv": 5, "when": 5, "how": [5, 6], "action": 5, "kei": 5, "conclud": 5, "note": 5, "us": 6, "thi": 6, "book": 6, "layout": 6, "jupyt": 6, "icon": 6, "format": 6, "environ": 6, "instal": 6, "googl": 6, "colab": 6, "toolbar": 6, "save": 6, "learn": [1, 2, 3, 4, 6], "more": 6, "preview": [1, 2, 3, 4], "object": [1, 2, 3, 4]}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})