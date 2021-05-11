# Stage 1 setup and execute build stage 
 
from node as builder
workdir /builder
copy package*.json /builder/
run yarn
copy ./ /builder/
run yarn build
 
# Stage 2 setup run environment
from nginx:stable-alpine
copy --from=builder /builder/build/ /usr/share/nginx/html
copy --from=builder /builder/nginx/nginx.conf /etc/nginx/conf.d/default.conf
 
expose 80
cmd ["nginx", "-g", "daemon off;"]