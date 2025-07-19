import { useState } from 'react';
import axios from 'axios';

const UploadArtworkForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (image) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const imageBase64 = reader.result as string;

        const response = await axios.post('/api/obras/base64', {
          title,
          description,
          image: imageBase64,
        });
        console.log(response.data);
      };
      reader.readAsDataURL(image);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título da Obra"
        className="p-2 border rounded-md mb-2"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descrição da Obra"
        className="p-2 border rounded-md mb-2"
      />
      <input
        type="file"
        onChange={(e) => e.target.files && setImage(e.target.files[0])}
        className="p-2 mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        Submeter
      </button>
    </form>
  );
};

export default UploadArtworkForm;
