# Dobrodošli!

### SPECIFIKACIJA TEHNOLOGIJA

- $ node
	> --version v6.11.4

- $ npm
	> --version 3.10.10
    
- $ ruby
    > --version ruby 2.4.3p205 (2017-12-14 revision 61247) [x64-mingw32]
    
- $ bower
	> --version 1.8.2
    
- $ gulp
	> --version CLI  3.9.1
    > --version Local  3.9.1
    
- $ AngularJS
	> --version ^1.6.9
    > --angular-route version ^1.6.9
    > --angular-moment version ^1.2.0
    
- $ moment
	> --version ^2.21.0
    
- $ jQuery
	> --version ^3.3.1
    
- $ bootstrap
	> --version ^4.0.0
 

### INSTRUKCIJE ZA POKRETANJE PROJEKTA

```
1. git clone https://github.com/jovanovicmilos/router.git

2. Nakon skidanja projekta trebate instalirati neophodne tehnologije za 
pokretanje projekta u lokalu (navede su gore ispod naslova "Specifikacija tehnologija")

3. Nakon toga u root folderu iz komandne linije ukucajte "npm install" za instalaciju node komponenti

4. onda pokrenuti "bower install"  iz foldera 'assets/' i instalirati neophodne bower komponente 

5. nakon toga mozete se vratiti na root projekta i pokrenuti projekat
iz komandne linije komandom "gulp".
```
- Default-ni port projekta je 3000, mozete po zelji promeniti u gulpfile.js (linija: 50)
- localhost:3000

### NAPOMENA

Sve komponente koje nisu neophodne za pokretanje projekta u "gulpfile.js"-u, a korišćene su u develop modu su zakomentarisane u kodu. 
