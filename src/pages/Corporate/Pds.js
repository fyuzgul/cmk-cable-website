import DocumentCard from "../../components/cards/DocumentCard";

export default function Pds() {
  const kvkkDocuments = [
    {
      id: 1,
      name: "Emma Thompson",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 2,
      name: "Michael Chen",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 3,
      name: "Liam Johnson",
      image:
        "https://images.unsplash.com/photo-1555685814-9f5b42a4f405?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 4,
      name: "Olivia Brown",
      image:
        "https://images.unsplash.com/photo-1561445386-cb2954f2acfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 5,
      name: "Ava Smith",
      image:
        "https://images.unsplash.com/photo-1599829791746-b4a544e6a9db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 6,
      name: "Noah Davis",
      image:
        "https://images.unsplash.com/photo-1542281286-8e1f3c00d2b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 7,
      name: "Isabella Martinez",
      image:
        "https://images.unsplash.com/photo-1542221561-5ebc747e4f43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 8,
      name: "Ethan Garcia",
      image:
        "https://images.unsplash.com/photo-1569301113-81222c0725a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
  ];
  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  max-w-screen-lg m-3">
          {kvkkDocuments.map((member) => (
            <DocumentCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </>
  );
}
