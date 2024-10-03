import { useState, useEffect } from "react";
import ContactInformationsService from "../services/ContactInformationsService";
import { useLoading } from "../contexts/LoadingContext";

const useFetchAllContactInformations = () => {
  const [contactinformations, setContactInformations] = useState([]);
  const { setLoading } = useLoading();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContactInformations = async () => {
      try {
        const certificates =
          await ContactInformationsService.getAllContactInformations();
        setContactInformations(certificates);
      } catch (err) {
        setError("Failed to fetch certificates.");
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };
    fetchContactInformations();
  }, [setLoading]);
  return { contactinformations, error };
};

export default useFetchAllContactInformations;
