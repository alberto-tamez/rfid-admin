import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { useFormik } from "formik";

const baseURL = "https://usersapitest.azurewebsites.net/api/users";

export function RegisterPage() {
  const formik = useFormik({
    initialValues: {
      matricula: "",
      name: "",
      password: "",
      email: "",
      idCredencial: "",
    },
    onSubmit: (values) => {
      axios
        .post(baseURL, {
          matricula: values.matricula,
          name: values.name,
          email: values.email,
          password: values.password,
          idCredencial: values.idCredencial,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Crea un nuevo Usuario</CardTitle>
        <CardDescription>
          En un click, despliega un nuevo usuario en la base de datos
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="name">Matricula</label>
              <input
                id="matricula"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Matricula del usuario"
                {...formik.getFieldProps("matricula")}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Nombre del usuario"
                {...formik.getFieldProps("name")}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="name">Contraseña</label>
              <input
                id="password"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Contraseña del usuario"
                {...formik.getFieldProps("password")}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="name">Email</label>
              <input
                id="email"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Email del usuario"
                {...formik.getFieldProps("email")}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="name">idCredencial</label>
              <input
                id="idCredencial"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="id de la credencial"
                {...formik.getFieldProps("idCredencial")}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full p-2 mt-4 bg-blue-500 rounded-md text-white"
          >
            Submit
          </button>
        </form>
      </CardContent>
    </Card>
  );
}
