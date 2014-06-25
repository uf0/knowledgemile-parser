knowledgemile-parser
====================

collection of quick and dirty scripts used during Measuring Amsterdam event

##Installation
If you want to run your instance of knowledgemile-parser locally on your machine, be sure you have the following requirements installed.

###Requirements

- [Git](http://git-scm.com/book/en/Getting-Started-Installing-Git)
- [Node](http://nodejs.org/)

Clone knowledgemile-parser from the command line:

``` sh
$ git clone https://github.com/uf0/knowledgemile-parser.git
```

browse to knowledgemile-parser root folder:

``` sh
$ cd knowledgemile-parser
```

install node modules:

``` sh
$ npm install
```

create data folders:

``` sh
$ mkdir data data/barchart data/final
```

Download raw data:

``` sh
$ node downloader.js
```

Use one of the other scripts:

``` sh
$ node script_name.js
```