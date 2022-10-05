Search.setIndex({"docnames": ["README", "fall_2022/0_motivation", "fall_2022/1_dataSourcing", "fall_2022/2_dataContinuity", "fall_2022/3_dataTimeliness", "fall_2022/Untitled", "fall_2022/appendix_vectorize", "intro"], "filenames": ["README.md", "fall_2022\\0_motivation.ipynb", "fall_2022\\1_dataSourcing.ipynb", "fall_2022\\2_dataContinuity.ipynb", "fall_2022\\3_dataTimeliness.ipynb", "fall_2022\\Untitled.ipynb", "fall_2022\\appendix_vectorize.ipynb", "intro.md"], "titles": ["GearUp-MessyData", "Chapter 0 - Why do we need robust data?", "Chapter 1 - Data Sourcing", "Chapter 2 - Data Continuity", "Chapter 3 - Data Timeliness", "&lt;no title&gt;", "Optimizing data filling via Vectorization", "Welcome to the Understanding Messy Time Series Data workshop!"], "terms": {"ssd": [0, 3, 4, 6], "resourc": [0, 1, 2, 3, 4, 6], "fall": [0, 7], "2022": [0, 1, 2, 7], "workshop": [0, 3, 4, 6], "seri": [0, 1, 4, 6], "work": [0, 2, 3, 6], "real": [0, 1, 2, 3, 4], "world": [0, 2], "data": 0, "garbag": 1, "out": [1, 2, 3, 6], "befor": [1, 2, 3, 6], "run": [1, 2, 3, 6], "ani": [1, 2, 3, 4, 6], "code": [1, 4], "block": [1, 2, 3, 6], "follow": [1, 2, 4, 6], "pleas": [1, 2, 3, 4, 6], "ensur": [1, 2, 3, 6], "you": [1, 2, 3, 4, 6], "have": [1, 2, 3, 4, 6], "necessari": [1, 2, 3, 6], "packag": [1, 2, 3, 6], "instal": [1, 2, 3, 6], "via": [1, 2, 3], "pip": [1, 2, 3, 6], "panda": [1, 2, 3, 6], "matplotlib": [1, 2, 3], "start": [1, 2, 3, 6], "explor": [1, 2, 3, 4], "how": [1, 2, 3, 6], "wrangl": [1, 6], "life": [1, 2, 3], "messi": [1, 3], "kei": [1, 2, 3, 4, 6], "understand": [1, 3, 6], "would": [1, 2, 3, 6], "want": [1, 2, 4, 6], "so": [1, 2, 3, 4, 6], "motiv": [1, 2, 4], "can": [1, 2, 3, 4, 6], "help": [1, 2, 3, 6], "us": [1, 2, 3, 4, 6], "make": [1, 2, 3, 4, 6], "decis": [1, 2, 3, 4], "gener": [1, 3, 4, 6], "process": [1, 2, 3, 4, 6], "interpret": [1, 6], "nowadai": 1, "often": [1, 2, 3, 6], "hear": 1, "stori": 1, "analysi": [1, 2, 3, 4, 6], "gone": 1, "awri": 1, "misappl": 1, "cut": [1, 6], "edg": 1, "technolog": 1, "all": [1, 2, 3, 4, 6], "too": [1, 3, 6], "common": [1, 3], "e": [1, 2, 3, 4, 6], "g": [1, 2, 3, 4], "machin": [1, 3, 6], "learn": [1, 3, 6, 7], "reproduc": 1, "crisi": 1, "proper": 1, "analyt": [1, 2, 3], "techniqu": [1, 2, 3, 6], "implement": [1, 3, 6], "context": [1, 2, 3, 6], "flaw": 1, "also": [1, 2, 3, 4, 6], "lead": [1, 3, 4, 6], "faulti": 1, "conclus": 1, "throughout": 1, "research": [1, 2, 3, 4, 6], "pipelin": 1, "mani": [1, 2, 3, 6], "wai": [1, 2, 3, 4], "particularli": [1, 2, 3, 6], "salient": 1, "ar": [1, 2, 3, 4, 6, 7], "bias": [1, 2, 3], "some": [1, 2, 3, 4, 6], "most": [1, 2, 3, 4, 6], "ll": [1, 2, 3, 4, 6], "find": [1, 2, 3, 6], "includ": [1, 2, 3, 6], "select": [1, 2, 3, 4], "bia": [1, 2], "ex": 1, "test": [1, 2, 6], "popul": [1, 3], "being": [1, 2, 3, 6], "repres": [1, 2, 3], "whole": 1, "exclud": [1, 3], "minor": 1, "group": [1, 2], "histor": [1, 3], "nlp": [1, 4], "word": [1, 6], "embed": 1, "model": [1, 3], "replic": [1, 2, 3], "gender": 1, "analog": [1, 2], "like": [1, 2, 3, 6], "man": 1, "doctor": 1, "woman": 1, "nurs": 1, "due": [1, 3, 6], "dispar": [1, 2], "opportun": [1, 2], "survivorship": 1, "evalu": [1, 2, 3, 6], "perform": [1, 2, 3, 6], "hedg": [1, 2], "fund": [1, 2], "from": [1, 2, 3, 4, 6], "1990": [1, 6], "2010": [1, 3], "onli": [1, 2, 3], "those": [1, 3, 6], "which": [1, 2, 3, 6], "still": [1, 2, 3, 6], "exist": [1, 2, 3, 4, 6], "present": [1, 3, 4, 6], "alreadi": [1, 2, 4, 6], "impli": [1, 2], "certain": [1, 3], "degre": [1, 2], "monetari": 1, "sucess": 1, "avail": [1, 2, 3, 6], "anytim": 1, "conveni": [1, 2, 3], "instead": [1, 6], "best": [1, 2, 4, 6], "one": [1, 2, 3, 4, 6], "outlier": [1, 3], "emploi": [1, 3], "summari": [1, 6], "statist": [1, 2, 3, 4, 6], "mask": [1, 3], "overli": 1, "sensit": [1, 3, 4], "drive": 1, "For": [1, 2, 3, 4, 6], "more": [1, 2, 3, 4, 6, 7], "type": [1, 2, 3, 4, 6], "explain": [1, 3], "fair": 1, "just": [1, 2, 3, 6], "lack": [1, 2, 3, 6], "But": [1, 2, 3, 4, 6], "creat": [1, 2, 3, 6], "while": [1, 2, 3, 4, 6], "qualiti": [1, 2, 3, 4], "mai": [1, 2, 3, 6], "appar": [1, 2, 3], "attribut": [1, 2, 3, 6], "possess": 1, "immedi": [1, 3], "obviou": [1, 3], "an": [1, 2, 3, 4, 6], "ideal": [1, 2, 3], "look": [1, 2, 3, 6], "collect": [1, 2, 6], "when": [1, 2, 3, 4, 6], "describ": [1, 2, 3, 6], "think": [1, 2, 3, 4], "about": [1, 2, 3, 6, 7], "experi": [1, 2, 4], "valid": [1, 3], "hypothes": [1, 2], "draw": [1, 3], "infer": 1, "etc": [1, 2, 3, 6], "These": [1, 2], "critic": [1, 3], "applic": [1, 2, 3, 4], "thei": [1, 2, 3, 4, 6], "share": [1, 2, 3, 6], "foundat": 1, "element": [1, 6], "reli": 1, "Then": [1, 2, 3, 6], "thi": [1, 2, 3, 4, 6, 7], "addit": [1, 2, 3], "ultim": [1, 2], "exact": [1, 2], "go": [1, 2, 3, 6], "depend": [1, 2, 3, 6], "field": [1, 2], "particular": [1, 2, 6], "howev": [1, 3, 4, 6], "consider": [1, 3, 4], "previous": [1, 3], "dicuss": [1, 2], "In": [1, 2, 3, 4, 6], "re": [1, 2, 3, 6], "each": [1, 2, 3, 6], "impact": [1, 2, 3], "creation": [1, 6], "ross": [1, 2], "d": [1, 2, 3, 7], "omest": [1, 2], "p": [1, 3, 6], "roduct": 1, "quick": [1, 2, 3, 6], "interact": [1, 3], "term": [1, 3], "take": [1, 2, 3, 6], "below": [1, 3], "otherwis": [1, 4], "feel": [1, 6], "free": [1, 6], "move": 1, "onto": 1, "next": [1, 3, 4], "jump": [1, 3], "refer": [1, 2, 3, 4, 6], "assess": [1, 2, 3, 4], "specif": [1, 2, 3], "wider": 1, "databas": 1, "third": [1, 3], "parti": 1, "vendor": [1, 2], "curat": 1, "structur": [1, 2, 3, 4, 6], "other": [1, 2, 3, 4, 6], "influenc": [1, 2, 3], "let": [1, 2, 3, 4, 6], "see": [1, 2, 3, 6], "librari": [1, 2, 6], "os": [1, 2, 3, 5, 6], "file": [1, 2, 3, 6], "manag": [1, 2, 3, 6], "access": [1, 2, 3, 6], "pd": [1, 2, 3, 6], "intak": [1, 2, 3, 6], "manipul": [1, 2, 3, 6], "pyplot": [1, 2, 3], "plt": [1, 2, 3], "custom": [1, 2, 6], "visual": [1, 2, 3], "retriev": [1, 6], "detail": [1, 2], "scienc": [1, 2, 3, 4, 6], "job": 1, "salari": 1, "http": [1, 3, 6, 7], "www": [1, 3], "kaggl": [1, 3], "com": [1, 3], "ruchi798": 1, "download": [], "home_dir": [1, 5], "path": [1, 2, 3, 5, 6], "dirnam": [1, 2, 3, 5, 6], "getcwd": [1, 2, 3, 5, 6], "data_path": 1, "sep": [1, 2, 3, 6], "sample_dataset": [1, 2, 3, 6], "ds_salari": 1, "csv": [1, 2, 3, 6], "read_csv": [1, 2, 3, 6], "encod": [1, 2, 3, 6], "utf": [1, 2, 3, 6], "8": [1, 6], "get": [1, 2, 3, 6], "few": [1, 2, 6], "entri": [1, 3], "print": [1, 2, 3, 5, 6], "head": [1, 2, 3, 6], "5": 1, "differ": [1, 2, 3, 6], "doe": [1, 2, 3, 6], "list": [1, 2, 3, 6], "column": [1, 2, 3, 6], "level": [1, 2, 3, 6], "expr_lvl_data": 1, "experience_level": 1, "value_count": 1, "sort_index": 1, "ascend": 1, "fals": 1, "bar": 1, "index": [1, 2, 3, 6], "valu": [1, 2, 3, 6], "bar_label": 1, "discuss": 1, "base": [1, 2, 3, 6], "chart": [1, 3], "were": [1, 2, 3, 6], "comput": [1, 3, 6], "mean": [1, 2, 3, 4, 6], "median": [1, 3], "2020": 1, "kind": 1, "issu": [1, 6], "might": [1, 2, 3, 6], "overlook": [1, 2], "Is": [1, 2, 4], "anyth": 1, "fundament": [1, 6], "wrong": 1, "calcul": [1, 2, 6], "chose": [1, 2], "rectifi": 1, "complet": [1, 2, 3, 6], "chosen": [1, 3], "across": [1, 2, 3], "given": [1, 2, 3, 4, 6], "dimens": [1, 3], "time": [1, 2, 3, 4, 6], "conduct": [1, 2, 3, 6], "biweekli": 1, "metric": [1, 2, 3, 4], "year": [1, 2, 3, 6], "26": 1, "appropri": [1, 2, 3], "space": 1, "respect": [1, 2, 3], "although": [1, 3, 6], "intuit": 1, "color": [1, 2, 3], "locat": 1, "price": [1, 3], "desir": [1, 2, 3, 6], "criteria": [1, 2, 3], "incomplet": [1, 3], "limit": [1, 2, 3, 4], "scope": [1, 3, 6], "method": [1, 6], "imput": [1, 3, 6], "miss": [1, 3, 6], "climat": [1, 2], "delhi": 1, "sumanthvrao": 1, "daili": 1, "daily_delhi_clim": 1, "check": [1, 3, 6], "info": [1, 2], "provid": [1, 2, 3, 6], "concis": [1, 6], "datafram": [1, 3, 6], "insight": 1, "dispers": 1, "shape": [1, 2, 3], "distribut": 1, "temperatur": 1, "april": [1, 2], "subset": [1, 2, 3, 6], "date": [1, 2, 3, 6], "meantemp": 1, "filter": [1, 2], "row": [1, 3, 6], "occur": [1, 3], "april_start_end_idx": 1, "4": 1, "1": 1, "2013": [1, 3], "30": [1, 2, 3, 6], "tolist": [1, 3, 6], "april_only_data": 1, "scatterplot": 1, "plot": [1, 2, 3], "format": [1, 2, 3, 6], "option": [1, 2, 3, 6], "readabl": [1, 6], "xtick": [1, 2, 3], "rotat": [1, 2, 3], "45": [1, 3, 6], "fontsiz": [1, 2, 3], "6": [1, 6], "ylim": 1, "20": [1, 2, 3], "35": [1, 3], "xlabel": [1, 2, 3], "ylabel": [1, 2, 3], "c": [1, 3, 6, 7], "displai": 1, "show": 1, "scatter": [1, 2, 3], "If": [1, 2, 3, 4, 6], "try": [1, 2, 3, 4, 6], "affect": [1, 3], "could": [1, 2, 3, 4, 6], "point": [1, 2, 3, 4, 6], "discontinu": [1, 3, 6], "better": [1, 2, 3, 4], "than": [1, 2, 3, 6], "proxim": [1, 4], "util": [1, 3, 4, 6], "moment": [1, 3, 4], "relev": [1, 3, 4, 6], "project": [1, 2, 3, 4, 6], "establish": [1, 2, 3, 6], "utliz": 1, "contemporan": 1, "timefram": [1, 2, 3], "i": [1, 2, 3, 6], "promin": 1, "topic": [1, 2, 3, 4], "1970": [1, 4], "textbook": [1, 4], "should": [1, 2, 3, 4], "text": [1, 3, 4, 6], "corpu": [1, 4], "1950": [1, 4], "case": [1, 2, 3, 6], "predict": [1, 3, 4], "especi": [1, 2, 3, 4, 6], "potenti": [1, 2, 3, 4], "wildfir": 1, "hotspot": 1, "demand": [1, 2, 3], "updat": [1, 4, 6], "To": [1, 2, 3, 6], "end": [1, 2, 3, 4, 6], "becom": [1, 3, 6], "appear": [1, 2, 3], "product": [1, 2, 3], "later": [1, 2, 3], "guarante": [1, 6], "develop": [1, 2, 3, 4, 6], "coincid": [1, 3, 6], "indic": [1, 3, 4], "up": [1, 2, 3, 6, 7], "hospit": 1, "capac": [1, 3], "sf": 1, "covid": 1, "19": 1, "catalog": 1, "gov": 1, "covid19_hospital_capac": 1, "alwai": [1, 2, 6], "sampl": [1, 3, 6], "suppos": [1, 2, 3, 6], "concern": [1, 3], "intens": [1, 3], "care": 1, "bed": 1, "avail_ic_b": 1, "statu": 1, "sort": [1, 2], "sort_valu": [1, 3], "ignore_index": [1, 3], "true": [1, 3], "latest": 1, "tail": [1, 2, 3], "15": [1, 2, 3, 6], "count": [1, 6], "where": [1, 2, 3, 6], "number": [1, 2, 3, 6], "todai": 1, "altern": [1, 2], "solut": 1, "task": [1, 6], "t": [1, 2, 3, 4, 6], "approxim": 1, "somehow": 1, "One": [1, 2, 3], "econom": [1, 2, 3], "greatest": [1, 3], "hit": [1, 6], "rest": 1, "haven": [1, 3], "refresh": [1, 3], "here": [1, 2, 3, 6, 7], "rundown": 1, "total": [1, 3, 6], "market": 1, "finish": 1, "good": [1, 3, 6], "servic": [1, 2], "produc": 1, "within": [1, 2, 3], "countri": 1, "border": 1, "period": [1, 2, 3], "overal": 1, "health": [1, 2], "larg": 1, "scale": [1, 3], "social": [1, 2, 3], "inquiri": 1, "form": [1, 2], "nomin": [1, 2, 3], "measur": [1, 2, 3, 4, 6], "fix": [1, 3], "estim": [1, 3, 4], "under": [1, 6], "condit": [1, 2], "steadi": 1, "currenc": 1, "low": [1, 3], "inflat": [1, 2], "full": [1, 3], "employ": [1, 2], "per": [1, 6], "capita": 1, "divid": [1, 3, 4, 6], "person": [1, 2, 3, 6], "set": [1, 3, 6], "timeseri": [1, 2, 3], "longitudin": 1, "studi": [1, 2], "usual": [1, 4, 6], "publish": [1, 2, 4], "lag": 1, "q2": [1, 2], "wasn": [1, 6], "offici": [1, 2, 4], "releas": [1, 2, 6], "until": [1, 6], "q3": [1, 4], "post": [1, 2, 4, 6], "numer": [1, 3], "agenc": [1, 2], "entiti": [1, 2], "govern": [1, 2], "relat": [1, 2, 4, 6], "multipl": [1, 6], "approach": [1, 3, 6], "expenditur": [1, 2], "incom": [1, 2], "As": [1, 2, 3, 4, 6], "soon": 1, "lend": [1, 2], "itself": [1, 2, 6], "inher": [1, 3, 6], "readi": [1, 2, 3], "The": [2, 3, 4, 6, 7], "modern": [2, 6], "landscap": 2, "ha": [2, 3, 6], "much": [2, 3, 6], "realli": [2, 6], "numpi": [1, 2, 3], "begin": [2, 3], "without": [2, 3, 6], "s": [2, 3, 4, 6], "trend": [2, 3], "identifi": [2, 4], "vast": 2, "overwhelm": 2, "x": [2, 3, 4, 6], "dataset": [2, 3, 4, 6], "almost": [2, 3, 6], "multitud": 2, "privat": 2, "organ": 2, "licens": 2, "open": 2, "matter": 2, "whose": 2, "absolut": [2, 6], "essenti": [2, 4], "analys": 2, "cook": 2, "acquir": 2, "ingredi": 2, "whether": [2, 3], "recip": 2, "thing": [2, 3, 6], "turn": 2, "well": [2, 3, 6], "input": [2, 3, 6], "poor": 2, "even": [2, 6], "same": [2, 3, 6], "basic": 2, "meta": 2, "factor": [2, 3], "favor": 2, "first": [2, 3, 6], "popular": 2, "we": [2, 3, 4, 6], "determin": [2, 6], "downstream": [2, 3], "aris": [2, 3, 6], "attempt": [2, 3, 4, 6], "three": [2, 3], "practic": [2, 4, 6], "futur": [2, 3, 6], "sub": [2, 3, 6], "section": [2, 3], "accompani": [2, 3], "It": [2, 3, 6], "suggest": [2, 3, 6], "through": [2, 3, 6], "them": [2, 3, 6], "order": [2, 3, 6], "do": [2, 3, 4, 6], "strictli": [2, 3], "scroll": 2, "down": [2, 6], "your": [2, 3, 4, 6], "web": 2, "browser": 2, "choic": 2, "minut": [2, 3], "10": [1, 2, 6], "100": [2, 3, 6], "clearli": 2, "despit": 2, "store": [2, 6], "what": [2, 3, 4, 6], "circumst": 2, "solv": 2, "problem": [2, 3], "reason": [2, 3, 6], "talk": [2, 3, 6], "who": [2, 6], "yourself": [2, 6], "craft": 2, "now": [2, 3, 6], "consid": [2, 3, 4, 6], "choos": [2, 3], "result": [2, 3, 6], "bureau": 2, "advisor": 2, "bea": 2, "datasets_dir": [2, 3, 6], "bea_data": 2, "gdp_bea_q2_2022_adv": 2, "usabl": [2, 3], "sound": [2, 3], "st": 2, "loui": 2, "feder": 2, "reserv": 2, "fred": [2, 3], "fred_data": 2, "gdp_fred": [2, 3], "random": [2, 3, 6], "websit": 2, "macrotrend": 2, "net": 2, "macrotrends_data": 2, "gdp_macrotrend": 2, "remot": 2, "similar": [2, 3], "search": 2, "among": 2, "easili": [2, 6], "simpl": [2, 3, 6], "lot": 2, "recent": [2, 3], "observ": [2, 3], "fred_data_subset": 2, "sure": [2, 3], "litt": 2, "read": [2, 3, 6], "abl": [2, 3, 6], "axi": [2, 3, 6], "rel": [2, 3], "clean": 2, "contain": [2, 3, 6], "two": [2, 3, 4, 6], "tempt": [2, 6], "ahead": [2, 3], "frequent": [2, 4, 6], "worth": [2, 6], "step": [2, 3], "back": [2, 3, 6], "dure": [2, 3], "individu": [2, 6], "own": [2, 3, 4, 6], "version": [2, 6], "perhap": 2, "credibl": [2, 3], "Or": 2, "mayb": [2, 3], "off": [2, 3], "shoot": 2, "been": [2, 3, 6], "meaning": 2, "found": [2, 3], "notat": 2, "billion": 2, "dollar": [2, 3], "season": 2, "adjust": 2, "annual": 2, "rate": 2, "isn": [2, 3], "subject": [2, 4, 6], "reput": [2, 3, 4], "easier": [2, 3], "tool": [2, 6], "less": [2, 3, 4, 6], "direct": [2, 3], "experiment": 2, "independ": [2, 3, 6], "queri": 2, "inform": [2, 3, 6], "respons": [2, 3], "its": [2, 3, 4, 6], "public": 2, "labor": 2, "raw": 2, "our": [2, 3, 6], "datasourc": 2, "wa": [2, 3, 6], "idea": [2, 3], "trace": 2, "after": [2, 3, 4, 6], "equal": 2, "remain": 2, "co": 2, "opt": [1, 2, 4, 6], "bank": 2, "oecd": 2, "organis": 2, "oper": [2, 3, 6], "nation": 2, "account": 2, "okai": 2, "trust": 2, "me": [2, 6], "fairli": [2, 3, 6], "ve": [2, 3, 6], "done": [2, 3], "initi": [2, 4, 6, 7], "inspect": 2, "summar": 2, "know": [2, 3, 6], "return": [2, 3, 6], "origin": [2, 3, 6], "question": [2, 3, 6], "underli": 2, "tabl": [2, 3], "characterist": 2, "notabl": [2, 3], "featur": 2, "cross": 2, "sector": 2, "1947": 2, "worldbank": 2, "intern": 2, "bodi": 2, "1960": 2, "add": [2, 3, 6], "calc": 2, "chang": [2, 3, 4, 6], "come": [2, 3, 6], "similarli": [2, 3], "And": [2, 3, 4, 6], "notic": [2, 3, 6], "vagu": 2, "intention": 2, "promis": 2, "becaus": [2, 6], "requir": [1, 2, 3, 4, 6], "breakdown": 2, "transform": [2, 3], "aka": 2, "panel": [2, 3], "merg": [2, 3], "need": [2, 3, 4, 6], "slightli": [2, 6], "richer": 2, "figur": [2, 3, 6], "ask": [2, 6], "traceback": 2, "verfic": 2, "rather": [2, 3, 6], "consum": [2, 6], "feasibl": 2, "ground": 2, "There": [2, 3], "hundr": [2, 6], "thousand": [2, 6], "quicker": [2, 6], "preliminari": 2, "viabil": 2, "wouldn": [2, 6], "believ": [2, 6], "intend": [2, 3], "note": [2, 3, 4, 6], "bit": 2, "awkward": 2, "name": [2, 6], "A": [2, 3, 4, 6], "non": [2, 3], "exhaust": 2, "academ": 2, "student": 2, "professor": 2, "aid": 2, "lab": 2, "reserach": [2, 3], "institut": [2, 3], "government": 2, "state": 2, "local": [2, 3, 6], "bureaucrat": 2, "depart": 2, "associ": [2, 3, 4], "dept": 2, "defens": 2, "nasa": 2, "u": 2, "n": [2, 3], "commer": 2, "compani": 2, "corpor": 2, "espeic": 2, "advisori": 2, "consult": [2, 3, 4, 7], "firm": 2, "forward": [2, 3], "reseach": 2, "caveat": [2, 3], "aren": 2, "necessarili": [2, 3], "concept": [2, 6], "welcom": 2, "certainli": [2, 3], "forthcom": 2, "encourag": [2, 3], "appli": [2, 3, 4], "expedit": 2, "belong": [2, 3, 6], "dive": [2, 6], "everyth": [2, 6], "carrot": 2, "someth": [2, 3, 6], "answer": [2, 3], "myself": 2, "did": [2, 3, 6], "gave": 2, "rise": [2, 3], "place": [2, 3, 6], "brainstorm": 2, "boost": 2, "secur": 2, "tenur": 2, "scoop": 2, "competitor": 2, "causal": 2, "relationship": [2, 3, 4], "___": 2, "jockei": 2, "authorship": 2, "posit": 2, "commonli": [2, 3], "align": [2, 3], "supervis": [2, 3], "faculti": 2, "lobbi": 2, "spend": [2, 3, 4], "effort": [2, 3], "demonstr": 2, "vulner": 2, "sanction": 2, "coalit": 2, "build": [2, 4], "coordin": 2, "polici": 2, "commerci": 2, "financi": 2, "analyst": 2, "invest": 2, "improv": 2, "perceiv": 2, "extern": [2, 3, 6], "clientel": 2, "discov": 2, "delet": 2, "hopefulli": [2, 3], "consciou": 2, "unconsci": 2, "underpin": 2, "knowledg": 2, "keep": [2, 6], "mind": [2, 6], "support": [2, 6], "suffer": 2, "failur": 2, "basi": [2, 3], "strength": [2, 3], "relatedli": 2, "newsworthi": 2, "interest": [2, 3, 4, 6], "anomali": 2, "egregi": 2, "conflict": 2, "petroleum": 2, "logic": [2, 3], "maintain": 2, "weak": 2, "prefer": [2, 4], "recommend": [2, 3, 4], "orthogon": 2, "current": 2, "cancer": 2, "risk": 2, "covari": 2, "anoth": [2, 3, 6], "propos": 2, "link": [2, 3], "sedentari": 2, "Of": [2, 3, 6], "special": 2, "fact": [2, 3, 6], "both": [2, 3, 6], "over": [2, 3, 6], "exampl": [2, 6], "zoom": [2, 3], "contribut": [2, 3], "portion": 2, "small": [2, 6], "busi": [2, 6], "spearhead": 2, "administr": [2, 3], "report": [2, 3], "2007": [2, 3], "1998": [2, 6], "2004": [2, 3], "decemb": 2, "2017": [2, 6], "2014": 2, "part": [2, 3, 7], "percentag": [2, 3], "overlap": 2, "expect": 2, "dramat": 2, "np": [2, 3, 6], "viz": [2, 3], "AND": 2, "sgdp_data": 2, "sgdp_sba": 2, "header": 2, "index_col": 2, "2017_report_sgdp_shar": 2, "2007_report_sgdp_shar": 2, "label": [2, 3, 6], "OF": 2, "limegreen": [2, 3], "blue": 2, "fit": [2, 3], "line": [2, 3, 6], "xval": 2, "yval": 2, "loc": [2, 3], "linewidth": 2, "linestyl": [2, 3], "seagreen": 2, "b": [2, 3, 4, 6, 7], "polyfit": 2, "steelblu": [2, 3], "titl": [2, 6], "vs": [2, 3], "farm": 2, "legend": [2, 3], "upper": [2, 3], "right": [2, 3], "tight_layout": [2, 3], "major": [2, 6], "discrep": 2, "offer": [2, 3, 6], "review": [2, 3, 4], "direction": 2, "opposit": 2, "aim": 2, "caus": 2, "granular": 2, "switch": [2, 6], "suspect": 2, "shift": 2, "recal": [2, 6], "plai": 2, "whistleblow": 2, "elect": 2, "great": [2, 3, 6], "claim": 2, "investig": [2, 3], "decad": 2, "recess": 2, "short": [2, 3], "give": [2, 3], "drastic": 2, "misreport": 2, "final": [2, 3, 4, 6], "simpli": [2, 3, 6], "methodolog": 2, "sinc": [2, 3, 6], "either": [2, 3], "credenc": 2, "grappl": 2, "thought": [2, 3], "accept": [2, 6], "instruct": [2, 6], "match": [2, 3], "theirs": 2, "sum": [2, 6], "ad": [2, 3, 4, 6], "stage": [2, 3, 6], "sale": 2, "minu": 2, "intermedi": 2, "purchas": 2, "made": [2, 3], "user": [1, 2, 5, 6], "consumpt": 2, "household": 2, "gover": 2, "foreign": 2, "compens": 2, "employe": 2, "receiv": [2, 3], "surplu": 2, "theori": [2, 6], "simplifi": 2, "economi": 2, "everi": [2, 3, 6], "spent": [2, 6], "neatli": 2, "captur": 2, "diagram": 2, "shown": 2, "introductori": 2, "class": [2, 3, 6], "circular": 2, "flow": [2, 3], "shall": 2, "page": 2, "gdi": 2, "ncome": 2, "theoret": 2, "hold": 2, "gdp_approaches_data": 2, "gdp_diff_approach": 2, "marker": [2, 3], "o": [2, 3, 6], "appr": 2, "left": [2, 3], "seem": [2, 3, 6], "pictur": 2, "diff": 2, "gdp_diff": 2, "dodgerblu": 2, "axhlin": 2, "y": [2, 3, 4], "red": 2, "past": [2, 6], "fiscal": 2, "quarter": [2, 3, 4], "consis": 2, "500": 2, "greater": [2, 3], "accuraci": [2, 3], "timeli": [2, 3], "diverg": [2, 6], "instanc": [2, 3, 4], "save": 2, "cash": 2, "reflect": 2, "inflationari": 2, "worsen": 2, "familiar": [2, 4], "thu": [2, 3], "substanti": 2, "readili": [2, 3], "imagin": [2, 3, 6], "exagger": 2, "typic": [2, 3, 6], "deflat": 2, "increas": [2, 3, 6], "influx": 2, "depict": 2, "stronger": 2, "actual": [2, 6], "recoveri": 2, "scenario": [2, 4], "seek": [2, 6], "justif": 2, "es": 2, "strongest": 2, "possibl": [2, 3, 6], "vari": [2, 6], "applicabl": 2, "abil": 2, "conting": [2, 6], "behavior": 2, "mass": 2, "valuabl": 2, "wish": [2, 3], "new": [2, 3, 6], "requisit": 2, "rigor": 2, "dessert": 2, "meal": 2, "round": [2, 3, 6], "rememb": [2, 3, 6], "criterion": 2, "verifi": 2, "reliabl": 2, "quickli": [2, 3, 6], "foreshadow": 2, "implic": 2, "Be": 2, "fortifi": 2, "usag": 2, "Not": 3, "comment": 3, "call": [3, 6], "uncom": 3, "dateutil": [1, 3], "parser": 3, "datetim": 3, "click": 3, "yet": [3, 6], "encount": 3, "hope": [3, 6], "natur": [3, 6], "priorit": 3, "author": 3, "unfortun": 3, "obstacl": 3, "besid": 3, "barrier": 3, "paywal": 3, "delight": 3, "children": 3, "classic": [3, 6], "goe": [3, 6], "rang": [3, 6], "pertin": 3, "address": [3, 6], "di": [3, 4], "identif": 3, "comprehens": [3, 6], "why": [3, 6], "my": [3, 6], "around": 3, "primari": 3, "focu": 3, "un": 3, "hoc": [3, 4], "cours": 3, "properli": 3, "tricki": 3, "unintention": 3, "write": [3, 6], "handl": [3, 6], "schedul": [3, 4, 7], "gdp": [3, 4, 6], "entir": 3, "veri": [3, 6], "regard": 3, "particip": 3, "timeslic": 3, "practi": 3, "nonetheless": 3, "tangibl": 3, "effect": 3, "correctli": 3, "enabl": 3, "accur": [3, 4], "incorrectli": 3, "skew": 3, "wors": [3, 6], "invalid": [1, 3, 6], "systemat": 3, "broaden": 3, "advis": 3, "broadli": [3, 4, 6], "classifi": [3, 6], "categori": [3, 4], "omiss": 3, "exclus": 3, "nativ": [3, 6], "permiss": 3, "extrapol": 3, "whatev": 3, "between": [3, 4], "quantit": 3, "versu": 3, "qualit": [3, 4], "commun": 3, "confid": 3, "said": 3, "nbsp": 3, "avoid": [3, 4, 6], "pothol": 3, "edit": 3, "programat": [3, 6], "command": [3, 6], "skip": 3, "omit": 3, "na": 3, "nan": 3, "dimension": [3, 6], "definit": [3, 6], "benefit": 3, "drawback": [3, 6], "pro": 3, "con": 3, "strategi": 3, "conspicu": 3, "asterisk": 3, "prefix": 3, "disadvantag": 3, "notebook": [3, 6], "anywher": 3, "convinc": 3, "least": [3, 6], "partial": 3, "mitig": [3, 4], "intellig": 3, "intent": 3, "design": [3, 6], "prior": 3, "further": [3, 4], "ing": 3, "master": 3, "def": [3, 6], "toi": 3, "master_data": 3, "2008": 3, "puzzl": 3, "nerf": 3, "footbal": 3, "2012": 3, "game": 3, "consol": 3, "construct": [3, 6], "df": 3, "dai": 3, "list_toys_receiv": 3, "len": [3, 6], "don": [3, 6], "els": 3, "birthdai": 3, "got": 3, "2009": 3, "2011": 3, "rescu": 3, "add_df": 3, "cloth": 3, "mobil": 3, "phone": 3, "mechan": [3, 6], "franken_df": 3, "concat": 3, "ts_data": 3, "2000": 3, "43": 3, "2001": 3, "2002": 3, "none": 3, "2003": 3, "39": 3, "44": 3, "2005": 3, "2006": 3, "52": [3, 6], "spin": 3, "amount": 3, "ones": [3, 6], "val": 3, "to_list": 3, "idx": [3, 6], "enumer": 3, "averag": [3, 6], "adjac": 3, "isna": 3, "separ": 3, "ideolog": 3, "merit": 3, "unlik": 3, "divis": 3, "incompat": 3, "purpos": 3, "tag": 3, "team": 3, "hip": 3, "hop": 3, "singl": [3, 6], "decid": 3, "inaccuraci": 3, "tractabl": 3, "orient": 3, "counterpart": 3, "mi": 3, "repeat": 3, "denot": [3, 6], "aggreg": 3, "downsampl": 3, "reduc": 3, "resolut": 3, "monthli": 3, "quarterli": 3, "upsampl": 3, "weekli": 3, "exactli": 3, "mathemat": [3, 6], "rd": [3, 6], "noth": [3, 6], "suspici": 3, "directori": 3, "inconspicu": 3, "anywai": [3, 6], "cyberattack": 3, "truli": [3, 6], "nefari": 3, "stuff": [3, 6], "rand_idx": [3, 6], "seed": [3, 6], "123": 3, "replicabl": 3, "friendli": [3, 6], "qoq_gdp_data": 3, "reset_index": 3, "drop": 3, "oh": 3, "plan": 3, "enemi": 3, "scientist": 3, "misinform": 3, "conjectur": 3, "qoq_gdp_damag": 3, "somewhat": 3, "contriv": 3, "presenc": 3, "agre": 3, "unreason": 3, "occurr": 3, "happen": [3, 6], "qoq": 3, "consist": [3, 6], "qualif": [3, 6], "asid": [3, 6], "hard": [3, 4], "er": 3, "ihsmarkit": 3, "html": [3, 6], "mom_gdp": 3, "monthly_gdp": 3, "estmat": 3, "real_gdp": 3, "monthly_real_gdp": 3, "inplac": 3, "patch": 3, "must": [3, 4, 6], "minimum": 3, "maximum": 3, "randomli": 3, "regim": 3, "fun": [3, 6], "filler": 3, "rodin": 3, "hi": 3, "parent": 3, "mull": 3, "arriv": 3, "satisfactori": 3, "meant": 3, "juli": 3, "1st": 3, "therefor": [3, 6], "unrel": 3, "novic": 3, "univers": 3, "close": 3, "retriv": 3, "reporting_d": 3, "correspond": 3, "resampled_mom_gdp": 3, "isin": 3, "qoq_gdp_fil": 3, "lambda": [3, 6], "monthly_nominal_gdp": 3, "visibl": 3, "alpha": 3, "huzzah": 3, "celebr": 3, "happi": 3, "recap": 3, "reknown": 3, "partier": 3, "programmat": 3, "straightforward": 3, "copi": 3, "nuanc": 3, "thoughtfulli": 3, "frequenc": 3, "scheme": 3, "That": 3, "quit": 3, "mention": 3, "strang": 3, "eventu": 3, "convenin": 3, "had": 3, "slice": 3, "dateset": 3, "2018": 3, "12": [3, 6], "11456": 3, "37": [3, 6], "TO": 3, "mom": 3, "9434": 3, "78": 3, "12346": 3, "25": [1, 3, 6], "11774": 3, "38": 3, "10409": 3, "21": [1, 3], "13879": 3, "53": 3, "unless": 3, "ly": 3, "intermediari": 3, "directli": [3, 6], "awar": [3, 6], "interpol": 3, "contrast": 3, "statis": 3, "algorithm": [3, 6], "glrm": 3, "rank": 3, "simultan": 3, "surround": 3, "datapoint": [3, 6], "optim": 3, "program": [3, 6], "won": 3, "saw": [3, 6], "upon": [3, 6], "fruit": 3, "abstractli": 3, "deepli": 3, "examin": 3, "generaliz": 3, "hand": [3, 6], "precis": 3, "upcom": 3, "At": 3, "high": 3, "output": [3, 6], "forecast": 3, "complex": [3, 6], "skill": 3, "pi": 3, "princip": 3, "bunch": [3, 6], "ga": 3, "agp": 3, "wise": [3, 6], "caution": 3, "exhibit": 3, "strong": 3, "correl": 3, "throw": 3, "routin": 3, "mildli": 3, "mif": 3, "didn": [3, 6], "send": 3, "pars": 3, "string": [3, 6], "hous": 3, "mruanova": 3, "gasolin": 3, "diesel": 3, "retail": 3, "19952021": 3, "gas_pric": 3, "gas_gas_ga": 3, "variabl": [3, 6], "rdinari": 3, "l": [3, 6], "east": 3, "quar": 3, "uninit": 3, "varibl": 3, "linear": 3, "function": [3, 6], "beta_1": 3, "beta_0": 3, "predictor": 3, "r": 3, "variat": 3, "beta": 3, "paramet": 3, "excel": 3, "guid": 3, "find_start_end_indic": 3, "start_dat": 3, "end_dat": 3, "last": [3, 6], "start_idx": 3, "end_idx": 3, "j": 3, "31": 3, "gas_start_idx": 3, "gas_end_idx": 3, "gdp_start_idx": 3, "gdp_end_idx": 3, "iloc": 3, "view": [3, 6], "ed": [3, 6], "sklearn": 3, "linear_model": 3, "linearregress": 3, "gas_x_val": 3, "r1": 3, "reshap": 3, "gdp_y_val": 3, "gdp_gas_ol": 3, "avg": [3, 6], "regular": 3, "grade": 3, "formul": 3, "ah": 3, "error": 3, "log": 3, "valueerror": 3, "inconsist": 3, "213": 3, "49": 3, "inde": 3, "num_gas_pric": 3, "num_gdp": 3, "pai": 3, "extra": 3, "attent": 3, "seen": 3, "wherea": [3, 6], "week": 3, "month": 3, "accordingli": 3, "littl": [3, 6], "m": [3, 6], "technic": 3, "14": [3, 6], "28": 3, "18": [1, 3], "109": 3, "068": 3, "017": 3, "977": 3, "978": 3, "96": 3, "14802": 3, "17": [1, 3], "14627": 3, "57": 3, "truth": 3, "told": 3, "phrase": 3, "compat": 3, "technieu": 3, "tranform": 3, "backward": 3, "convert": [3, 6], "gas_data_d": 3, "to_datetim": 3, "infer_datetime_format": 3, "gdp_data_d": 3, "replac": [3, 6], "counter": 3, "clever": 3, "merge_asof": 3, "both_weekly_data": 3, "monthly_gas_pric": 3, "convent": 3, "length": 3, "nice": [3, 6], "both_monthly_data": 3, "get_r2": 3, "freq": 3, "r_sq": 3, "score": [3, 6], "r2": 3, "4f": 3, "yearli": 3, "both_quarterly_data": 3, "q": 3, "both_yearly_data": 3, "4258": 3, "4320": 3, "4426": 3, "5965": 3, "wow": 3, "pretti": [3, 6], "40": 3, "nearli": [3, 6], "60": [3, 6], "compress": 3, "lose": 3, "inclus": 3, "rose": 3, "rapidli": 3, "induc": 3, "heavili": 3, "longer": [3, 6], "frame": 3, "allow": [3, 6], "extract": 3, "temporari": 3, "fluctuat": 3, "compon": 3, "sens": [3, 6], "togeth": [3, 6], "higher": 3, "obtain": [3, 6], "gain": [3, 6], "assum": 3, "fill_forward": 3, "artifici": 3, "insensit": 3, "lowest": 3, "though": [3, 4, 6], "happili": 3, "By": 3, "implicitli": 3, "weight": 3, "transfer": 3, "averg": 3, "nearest": 3, "neighbor": 3, "dial": 3, "onc": [3, 6], "zero": [3, 6], "infti": 3, "fast": [3, 4, 6], "execut": [3, 6], "easi": [3, 6], "meaningfulli": 3, "advic": 3, "wrap": 3, "aspect": 3, "On": 3, "system": 3, "classif": 3, "principl": 3, "augment": 3, "protocol": 3, "strengthen": 3, "pre": [3, 6], "dampen": 3, "signal": [3, 4], "No": 4, "yai": 4, "briefli": 4, "except": [4, 6], "promient": 4, "highschool": 4, "former": 4, "mostli": 4, "exercis": 4, "highli": 4, "sourc": 4, "continu": [4, 6], "gap": [4, 6], "rule": 4, "tradeoff": 4, "deriv": 4, "crucial": 4, "2021": 4, "q4": 4, "advanc": 4, "weren": 4, "credit": 4, "card": 4, "quantifi": 4, "iter": [4, 6], "remedi": 4, "conclud": 4, "gearup": [4, 5], "materi": 4, "stai": [4, 6], "thank": 4, "dealt": 6, "standard": 6, "1000": 6, "stanford": [6, 7], "sherlock": 6, "ridicul": 6, "power": 6, "chew": 6, "deal": 6, "massiv": 6, "With": 6, "runtim": 6, "constraint": 6, "progress": 6, "script": 6, "written": 6, "suboptim": 6, "defint": 6, "situat": 6, "heard": 6, "7": [1, 6], "11": [1, 6], "scalar": 6, "pair": 6, "operand": 6, "processor": 6, "carri": 6, "concurr": 6, "previou": 6, "congratul": 6, "mine": 6, "wonder": 6, "flexibl": 6, "idiom": 6, "slow": 6, "dynam": 6, "compil": 6, "bytecod": 6, "object": 6, "int": 6, "rock": 6, "dict": 6, "dictionari": 6, "overhead": 6, "resolv": 6, "repeatedli": 6, "significantli": 6, "static": 6, "languag": 6, "recur": 6, "cost": 6, "compel": 6, "programm": 6, "explicitli": 6, "translat": 6, "layer": 6, "interoper": 6, "arrai": 6, "instanti": 6, "confus": 6, "conductor": 6, "sai": 6, "str": 6, "band": 6, "interrog": 6, "earlier": 6, "thereof": 6, "elig": 6, "anthoni": 6, "land": 6, "gdp_data": 6, "1991": 6, "46": 6, "1992": 6, "48": 6, "1993": 6, "1995": 6, "55": 6, "1996": 6, "1997": 6, "63": 6, "1999": 6, "67": 6, "1994": 6, "gdp_x": 6, "four": 6, "insert": 6, "0": 6, "percent_increas": 6, "append": 6, "revers": 6, "inelig": 6, "expand": 6, "000": 6, "24": 6, "enough": 6, "unit": 6, "chunk": 6, "fine": 6, "nonstandard": 6, "sign": 6, "doubt": 6, "understood": 6, "tackl": 6, "premier": 6, "tabular": 6, "scientif": 6, "ndarrai": 6, "timer": 6, "timeit": 6, "ipython": 6, "jupyt": [6, 7], "magic": 6, "suffix": 6, "line_profil": 6, "verbos": 6, "cython": 6, "declar": 6, "symbol": 6, "id": 6, "wranglnig": 6, "song_df": 6, "unpopular_song": 6, "break": 6, "unpopular": 6, "song": 6, "spotifi": 6, "track": 6, "artist": 6, "danceabl": 6, "energi": 6, "involv": 6, "defin": 6, "silli": 6, "spit": 6, "anthony_scor": 6, "loud": 6, "mode": 6, "tempo": 6, "speechi": 6, "music": 6, "coffe": 6, "caffeine_subscor": 6, "ear": 6, "eardrum_health": 6, "vibe_subscor": 6, "240": 6, "bonu": 6, "elev": 6, "talk_subscor": 6, "proprietari": 6, "baselin": 6, "naiv": 6, "invok": 6, "loopabl": 6, "tupl": 6, "786": 6, "ms": 6, "34": 6, "9": [1, 6], "std": 6, "dev": 6, "half": 6, "second": 6, "sophist": 6, "speed": 6, "built": 6, "along": 6, "specifi": 6, "document": 6, "pydata": 6, "org": 6, "doc": 6, "api": 6, "350": 6, "effici": 6, "hood": 6, "difficult": 6, "margin": 6, "18x": 6, "storag": 6, "ax": 6, "conduc": 6, "faster": 6, "83": 6, "352": 6, "\u00b5s": 6, "scoreboard": 6, "191": 6, "26x": 6, "429": 6, "51x": 6, "achiev": 6, "seriou": 6, "500x": 6, "known": 6, "lanugag": 6, "represent": 6, "pass": 6, "548": 6, "vect": 6, "34x": 6, "1434": 6, "31x": 6, "leav": 6, "speak": 6, "referenc": 6, "overload": 6, "accord": 6, "creativ": 6, "unwiedli": 6, "unavoid": 6, "pure": 6, "onlin": 6, "accomplish": 6, "adapt": 6, "345": 6, "anthony_ifi": 6, "song_nam": 6, "chop": 6, "song_name_word": 6, "split": 6, "pick": 6, "randint": 6, "em": 6, "better_song_nam": 6, "join": 6, "test_num": 6, "1004": 6, "7942": 6, "8282": 6, "korean": 6, "angel": 6, "friend": 6, "song_name_list": 6, "track_nam": 6, "num": 6, "og_nam": 6, "anthony_nam": 6, "bet": 6, "blazingli": 6, "tri": 6, "decompos": 6, "smaller": 6, "func": 6, "constitu": 6, "name_word": 6, "num_word": 6, "word_count": 6, "wc": 6, "name_words_w_anthoni": 6, "reconstruct": 6, "substr": 6, "map": 6, "196": 6, "decomposit": 6, "mileag": 6, "mix": 6, "dtype": 6, "regex": 6, "memori": 6, "Their": 6, "syntax": 6, "f": 6, "seq": 6, "surprisingli": 6, "modul": 6, "oppos": 6, "forget": 6, "humbl": 6, "doesn": 6, "wast": 6, "ran": 6, "slower": 6, "modifi": 6, "sofia": 6, "heisler": 6, "her": 6, "pycon": 6, "enjoi": 6, "toolbox": 6, "mop": 6, "emori": 6, "ptimiz": 6, "rogram": 6, "calabl": 6, "gif": 6, "never": 6, "book": 7, "jupyterlab": [], "environ": [], "sidebar": [], "launch": [], "visit": 7, "regularli": [], "feedback": [], "github": [], "repositori": [], "eastbayev": [], "edu": 7, "softwar": [], "rsvp": 7, "33mwarn": 1, "ignor": 1, "ensorflow": 1, "evanmuzzal": [1, 5], "anaconda3": 1, "lib": 1, "python3": 1, "site": 1, "0m": 1, "33m": 1, "0mrequir": 1, "satisfi": 1, "3": 1, "2": 1, "pytz": 1, "six": 1, "16": 1, "0mnote": 1, "restart": 1, "kernel": 1, "pillow": 1, "pypars": 1, "fonttool": 1, "22": 1, "cycler": 1, "kiwisolv": 1, "downloadz": 1, "z": 1, "import": 5, "desktop": 5, "messydata": 5, "gear": 7, "regist": 7, "event": 7, "legaci": 7, "945": 7, "94519": 7, "goal": 7}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"gearup": 0, "messydata": 0, "chapter": [1, 2, 3, 4, 6], "0": [1, 2, 3, 4], "why": [1, 2], "do": 1, "we": 1, "need": 1, "robust": 1, "data": [1, 2, 3, 4, 6, 7], "prerequisit": [1, 2, 3, 6], "python": [1, 2, 3, 6], "import": [1, 2, 3, 4, 6], "what": 1, "s": 1, "deal": 1, "defin": [1, 2, 3, 4], "A": 1, "work": 1, "definit": 1, "sourc": [1, 2, 3], "exampl": [1, 3], "continu": [1, 3], "timeli": [1, 4], "workshop": [1, 7], "essenti": 1, "gdp": [1, 2], "dataset": 1, "defint": 1, "usag": 1, "your": 1, "typic": 1, "1": [2, 3, 4, 6], "prefac": [2, 3, 6], "good": 2, "2": [2, 3, 4, 6], "issu": [2, 3], "3": [2, 3, 4, 6], "decid": 2, "between": 2, "multipl": 2, "author": 2, "code": [2, 3, 6], "exercis": [2, 3, 6], "discuss": [2, 3, 4, 6], "conclus": [2, 3, 6], "4": [2, 3, 6], "understand": [2, 7], "incent": 2, "purpos": 2, "5": [2, 3, 6], "sgdp": 2, "6": [2, 3], "valid": 2, "gener": 2, "approach": 2, "7": [2, 3], "8": [2, 3], "comput": 2, "9": [2, 3], "takeawai": [2, 3, 4], "consequ": 3, "follow": 3, "best": 3, "practic": 3, "remedi": 3, "gap": 3, "endo": 3, "exo": 3, "genou": 3, "fill": [3, 6], "exogen": 3, "method": 3, "resampl": 3, "cont": 3, "endogen": 3, "10": 3, "11": 3, "codf": 3, "wrangl": 3, "ol": 3, "regress": 3, "redux": 3, "construct": 4, "optim": 6, "via": 6, "vector": 6, "loop": 6, "iterrow": 6, "better": 6, "appli": 6, "basic": 6, "numpi": 6, "framework": 6, "non": 6, "numer": 6, "benefit": 6, "improv": 6, "welcom": 7, "taml": [], "thank": [], "you": 7, "everyon": [], "who": [], "particip": [], "pilot": [], "iter": [], "winter": [], "quarter": [], "2022": [], "stai": [], "tune": [], "next": [], "come": [], "soon": [], "messi": 7, "time": 7, "seri": 7, "brought": 7, "softwar": 7, "servic": 7, "scienc": 7, "ssd": 7, "green": 7, "librari": 7}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})