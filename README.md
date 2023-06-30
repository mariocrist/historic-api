#  historic-api 

A node js api to consume specific end points.     

## Steps

## Download & Build on local

### 1) Clone the repository from github, install node packages

``` 
//on local
git clone https://github.com/mariocrist/historic-api
cd historic-api
npm install
```
### 2) configure .env file for mssql conection 

### 3) run application 

``` 
npm run start
```

### 4) Open your local browser and verify the sample-node-api is working by accessing:     
`http://localhost:5000/api/histTramos?fechainicial=2014-01-01?fechafinal=2014-01-02`
`http://localhost:5000/api/histClientes?fechainicial=2014-01-01?fechafinal=2014-01-02`
`http://localhost:5000/api/peorClientes?fechainicial=2014-01-01?fechafinal=2014-01-02`