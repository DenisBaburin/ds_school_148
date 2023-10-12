import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { IUser } from "../models";
import ErrorMessage from "./ErrorMessage";

interface CreateUserProps {
  onCreate: (user: IUser) => void;
}

const userData: IUser = {
  email: "John@gmail.com",
  username: "johnd",
  password: "m38rmF$",
  name: {
    firstname: "John",
    lastname: "Doe",
  },
  address: {
    city: "kilcoole",
    street: "7835 new road",
    number: 3,
    zipcode: "12926-3874",
    geolocation: {
      lat: "-37.3159",
      long: "81.1496",
    },
  },
  phone: "1-570-236-7033",
  __v: 0,
  id: 0,
};

const CreateUser = ({ onCreate }: CreateUserProps) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (event: any) => {
    event.preventDefault();
    setError("");
    if (
      name.trim().length === 0 ||
      surname.trim().length === 0 ||
      username.trim().length === 0 ||
      email.trim().length === 0 ||
      phone.trim().length === 0 ||
      city.trim().length === 0
    ) {
      setError("Please fill all fields!");
      return;
    }

    userData.name.firstname = name;
    userData.name.lastname = surname;
    userData.address.city = city;
    userData.email = email;
    userData.phone = phone;
    userData.username = username;

    // const response = await axios.post<IUser>(
    //   "https://fakestoreapi.com/users",
    //   userData
    // );
    //console.log(userData);
    onCreate(userData);
  };

  return (
    <Stack>
      <Box
        component="form"
        sx={{ display: "flex", gap: "15px", margin: "15px" }}
      >
        <FormControl>
          <InputLabel htmlFor="component-outlined">Name</InputLabel>
          <OutlinedInput
            size="small"
            value={name}
            onChange={(event) => setName(event.target.value)}
            label="Name"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-outlined">Surname</InputLabel>
          <OutlinedInput
            label="Surname"
            size="small"
            value={surname}
            onChange={(event) => setSurname(event.target.value)}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-outlined">Username</InputLabel>
          <OutlinedInput
            label="Username"
            size="small"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </FormControl>
      </Box>
      <Box
        component="form"
        sx={{ display: "flex", gap: "15px", margin: "15px" }}
      >
        <FormControl>
          <InputLabel htmlFor="component-outlined">Email</InputLabel>
          <OutlinedInput
            label="Email"
            size="small"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-outlined">Phone</InputLabel>
          <OutlinedInput
            label="Phone"
            size="small"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-outlined">City</InputLabel>
          <OutlinedInput
            label="City"
            size="small"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </FormControl>
      </Box>
      {error && <ErrorMessage error={error} />}
      <Button type="submit" onClick={submitHandler}>
        Create user
      </Button>
    </Stack>
  );
};

export default CreateUser;
