import { getUnits } from "../db/quaries";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const useUnits = () => {
  const [units, setUnits] = useState();
  const { userId } = useAuth();

  useEffect(() => {
    const fetchUnits = async () => {
      try {
        // console.log("user id", userId)
        const data = await getUnits(userId);
        setUnits(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    userId && fetchUnits();
  }, [userId]);
  return units;
};

export default useUnits;
