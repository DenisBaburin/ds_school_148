import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { IUser } from "../models";

const useUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function addUser(user: IUser) {
    setUsers((prev) => [...prev, user]);
  }

  async function fetchUsers() {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get<IUser[]>(
        "https://fakestoreapi.com/users"
      );
      setUsers(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, loading, error, addUser, setUsers };
};

export default useUsers;
