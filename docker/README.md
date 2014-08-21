### To build the image

docker build -t nib .

### To run the first exercise in the workshop

cat mysolution.js | docker run --rm -i -e WORKSHOP="HELLO WORLD" nib
