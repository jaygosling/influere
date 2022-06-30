const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      message: null,
      permiso: false,
      favInf: [],
      posts: [],
      influencers: [],
      datosEmpresa: {},
      datosInfluencer: {},
      profileData: {},
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white"
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white"
        },
      ]
    },
    actions: {
      // Use getActions to call a function within a fuction
      agregar: (url) => {
        const store = getStore();
        setStore({ posts: [...store.posts, url] });
      },

      addFavInf: (name) => {
        setStore({ favInf: [...getStore().favInf, name] })
      },
      deleteFavInf: (name) => {
        let newArray = getStore().favInf.filter((valor) => {
          return valor != name;
        });
        setStore({ favInf: newArray })
      },
      conseguirInfluencer: (ig_user) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const store = getStore()

        fetch(`${process.env.BACKEND_URL}/api/influencers/${ig_user}`)
          .then(function (response) {
            return response.json()
          })
          .then(function (result) {
            setStore({ datosInfluencer: result });
            fetch(
              `${process.env.BACKEND_URL}/api/instagram/${store.datosInfluencer.ig_user}`
            )
              .then(function (response) {
                return response.json();
              })
              .then(function (result) {
                setStore({
                  datosInfluencer: { ...store.datosInfluencer, ...result },
                });
                actualizarInfluencer(id, datosInfluencer);
                return console.log(result);
              })

              .catch((error) => console.log("error", error));
            return console.log(result);
          })

          .catch((error) => console.log("error", error));
      },

      actualizarEmpresa: (id, datos) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(datos);

        var requestOptions = {
          method: 'PUT',
          headers: myHeaders,
          body: raw,
          redirect: 'follow',
        };

        fetch(`${process.env.BACKEND_URL}/api/empresas/${id}`, requestOptions)
          .then(function (response) {
            if (response.ok == true) {
              alert("Usuario actualizado con éxito");
            } else {
              alert(
                "Lo sentimos, no se ha podido crear el usuario. Por favor, contacta con nosotros."
              );
            }
            return response.text();
          })
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      },
      actualizarInfluencer: (id, datos) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(datos);

        var requestOptions = {
          method: "PUT",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          `${process.env.BACKEND_URL}/api/influencers/${ig_user}`,
          requestOptions
        )
          .then(function (response) {
            if (response.ok == true) {
              alert("Usuario actualizado con éxito");
            } else {
              alert(
                "Lo sentimos, no se ha podido crear el usuario. Por favor, contacta con nosotros."
              );
            }
            return response.text();
          })
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      },
      delDataEmpresas: () => {
        document.getElementById("email-empresa").value = "";
        document.getElementById("password-empresa").value = "";
        document.getElementById("rep-password-empresa").value = "";
        document.getElementById("apellidos").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("razon").value = "";
        document.getElementById("sector").value = "";
        document.getElementById("autonomia").value = "";
        document.getElementById("ciudad").value = "";
        document.getElementById("bio").value = "";
      },

      delDataInfluencers: () => {
        document.getElementById("email-influ").value = "";
        document.getElementById("password-influ").value = "";
        document.getElementById("rep-password-influ").value = "";
        document.getElementById("apellidos").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("autonomia").value = "";
        document.getElementById("categoria").value = "";
        document.getElementById("ig-user").value = "";
        document.getElementById("ciudad").value = "";
        document.getElementById("bio").value = "";
        document.getElementById("precio-story").value = "";
        document.getElementById("precio-reel").value = "";
        document.getElementById("precio-post").value = "";
      },

      conseguirEmpresa: (id) => {
        var myHeaders = new Headers();
        const store = getStore();
        myHeaders.append("Content-Type", "application/json");

        fetch(process.env.BACKEND_URL + "/api/empresas/" + id)
          .then(function (response) {
            return response.json();
          })
          .then(function (result) {
            setStore({ datosEmpresa: result });
            console.log(getStore());
            return console.log(result);
          })
          .catch((error) => console.log("error", error));
      },

      registrarEmpresa: (datosEmpresa) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(datosEmpresa);

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          process.env.BACKEND_URL + "/api/registro-empresas",
          requestOptions
        )
          .then(function (response) {
            if (response.ok == true) {
              alert("Usuario creado con éxito");
            } else {
              alert(
                "Lo sentimos, no se ha podido crear el usuario. Por favor, contacta con nosotros."
              );
            }
            return response.text();
          })
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      },

      conseguirFotoPerfil: (user) => {
        const store = getStore()
        var myHeaders = new Headers();
        var profilePicUrl = ""
        myHeaders.append("Content-Type", "application/json");
        fetch(`${process.env.BACKEND_URL}/api/instagram/${user}`)
          .then(function (response) {
            return response.json()
          })
          .then(function (result) {
            profilePicUrl = result.profilepic
            store.profileData.followers = result.followers
            return console.log(result)
          })
        var raw = JSON.stringify({
          "file": `${profilePicUrl}`,
          "upload_preset": "influere_uns",
          "public_id": `${user}`
        });

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("https://api.cloudinary.com/v1_1/influere/image/upload", requestOptions)
          .then(response => response.text())
          .then(result => {

            store.profileData.picUrl = result.url
            console.log(result)
          })
          .catch(error => console.log('error', error));
      },
      registrarInfluencer: (datosInfluencer) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(datosInfluencer);

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          process.env.BACKEND_URL + "/api/registro-influencers",
          requestOptions
        )
          .then(function (response) {
            if (response.ok == true) {
              alert("Usuario creado con éxito");
              location.href = '/';
            } else {
              alert(
                "Lo sentimos, no se ha podido crear el usuario. Por favor, contacta con nosotros."
              );
            }
            return response.text();
          })
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      },

      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      privado: () => {
        var myHeaders = new Headers();
        myHeaders.append(
          "Authorization",
          `Bearer ${sessionStorage.getItem("token")}`
        );

        var requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };

        fetch(
          "https://3001-jaygosling-influere-gyow40i3nvc.ws-eu47.gitpod.io/privada",
          requestOptions
        )
          .then((response) => response.jeson())
          .then((result) => {
            console.log(result);
            setStore({ permiso: result.permiso });
          })
          .catch((error) => console.log("error", error));
      },

      login: async (email, password) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          email: email,
          password: password,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/login",
            requestOptions
          );
          if (resp.status != 200) {
            alert("Correo o contraseña erroneo!");
            return false;
          }

          const data = await resp.json();
          console.log("this come form the backend", data);
          sessionStorage.setItem("token", data.access_token);
          sessionStorage.setItem("user", "influencer");
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.error("Error al iniciar sesion");
        }
      },
      buscar: (categoria, ubicacion, seguidores, precioPubli) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          categoria: categoria,
          ubicacion: ubicacion,
          seguidores: seguidores,
          precioPubli: precioPubli
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(process.env.BACKEND_URL + "/api/influencers/filter",
          requestOptions)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setStore({ influencers: data });
          })
          .catch((error) => console.log("error", error));
      },

      loginempresa: async (email, password) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          email: email,
          password: password,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/loginempresa",
            requestOptions
          );
          if (resp.status != 200) {
            alert("Correo o contraseña erroneo!");
            return false;
          }

          const data = await resp.json();
          console.log("this come form the backend", data);
          sessionStorage.setItem("token", data.access_token);
          sessionStorage.setItem("user", "empresa");
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.error("Error al iniciar sesion");
        }
      },
      getInfluencers: async () => {
        await fetch(process.env.BACKEND_URL + "/api/influencers")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);

            /* for (let i = 0; i < data.length; i++) {
              //fetch(`${process.env.BACKEND_URL}/api/instagram/${data[i].ig_user}`)
              fetch(`${process.env.BACKEND_URL}/api/instagram/daninzrth`)
                .then(function (result) {
                  data[i]["followers"] = result.followers;
                  data[i]["profilepic"] = result.profilepic;
                })
                .catch((error) => console.log("error", error));
            }
            console.log("data", data); */
            setStore({ influencers: data });
          })
          .catch((error) => console.log("error", error));
      },

      getMessage: () => {
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/hello")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
