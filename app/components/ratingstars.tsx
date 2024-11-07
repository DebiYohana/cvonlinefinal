'use client'; // Menandai komponen ini sebagai Client Component

import React, { useState, useEffect } from 'react';

function Rating() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState<number>(0);
  const [allRatings, setAllRatings] = useState<number[]>([]);
  const [feedbacks, setFeedbacks] = useState<{ name: string; comment: string }[]>([]);

  useEffect(() => {
    const savedRatings = JSON.parse(localStorage.getItem('allRatings') || '[]');
    const savedFeedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]');
    setAllRatings(savedRatings);
    setFeedbacks(savedFeedbacks);
  }, []);

  const averageRating = allRatings.length
    ? (allRatings.reduce((a, b) => a + b, 0) / allRatings.length).toFixed(1)
    : '0';
  const ratingPercentage = allRatings.length
    ? ((Number(averageRating) / 5) * 100).toFixed(1)
    : '0';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && comment && rating > 0) {
      const newRatings = [...allRatings, rating];
      const newFeedbacks = [...feedbacks, { name, comment }];
      setAllRatings(newRatings);
      setFeedbacks(newFeedbacks);
      localStorage.setItem('allRatings', JSON.stringify(newRatings)); // Simpan di localStorage
      localStorage.setItem('feedbacks', JSON.stringify(newFeedbacks)); // Simpan di localStorage
      alert('Komentar dan rating berhasil dikirim!');
      setName('');
      setComment('');
      setRating(0);
    } else {
      alert('Mohon isi semua kolom dan pilih rating yang valid.');
    }
  };

  const handleDelete = (index: number) => {
    const newFeedbacks = feedbacks.filter((_, i) => i !== index);
    setFeedbacks(newFeedbacks);
    alert('Komentar berhasil dihapus! (permanen dari tampilan, tetapi masih di localStorage)');
  };

  return (
    <div className="rating-container">
      <h2 className="rating-heading">Formulir Komentar</h2>

      <form onSubmit={handleSubmit} className="rating-form">
        <div className="input-group">
          <label htmlFor="name">Nama:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label htmlFor="comment">Komentar:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            rows={4}
            className="input-field"
          />
        </div>

        <div className="rating-stars">
          <label>Rating:</label>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= rating ? 'filled' : ''}`}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <button type="submit" className="submit-button">Kirim Komentar</button>
      </form>

      <div className="rating-summary">
        <h3>Rata-Rata Rating: {averageRating} dari 5 bintang</h3>
        <div className="rating-bar">
          <div
            className="rating-fill"
            style={{ width: `${ratingPercentage}%` }}
          />
        </div>
        <div className="rating-percentage">{ratingPercentage}%</div>
      </div>

      <div className="feedback-list">
        <h3>Daftar Komentar</h3>
        <table className="feedback-table">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Komentar</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback, index) => (
              <tr key={index}>
                <td>{feedback.name}</td>
                <td>{feedback.comment}</td>
                <td>
                  <button
                    onClick={() => handleDelete(index)}
                    className="delete-button"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .rating-container {
          max-width: 600px;
          margin: 0 auto;
          font-family: 'Arial', sans-serif;
          color: #333;
        }

        .rating-heading {
          text-align: center;
          color: #00FF00;
          text-shadow: 0 0 5px #00FF00, 0 0 10px #00FF00;
          margin-bottom: 20px;
        }

        .rating-form {
          background-color: #111;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0, 255, 0, 0.2);
        }

        .input-group {
          margin-bottom: 1em;
        }

        .input-group label {
          color: #00FF00;
          font-weight: bold;
          display: block;
          margin-bottom: 5px;
        }

        .input-field {
          width: 100%;
          padding: 10px;
          font-size: 14px;
          color: #00FF00;
          background-color: #222;
          border: 1px solid #00FF00;
          border-radius: 5px;
        }

        .input-field:focus {
          outline: none;
          border-color: #00FF00;
        }

        .rating-stars {
          margin-bottom: 1em;
        }

        .stars {
          display: flex;
          gap: 5px;
          margin-top: 5px;
        }

        .star {
          font-size: 30px;
          cursor: pointer;
          transition: color 0.2s;
        }

        .star.filled {
          color: #FFD700;
        }

        .star:hover {
          color: #FFD700;
        }

        .submit-button {
          padding: 10px 20px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .submit-button:hover {
          background-color: #45a049;
        }

        .rating-summary {
          margin-top: 2em;
          text-align: center;
        }

        .rating-bar {
          width: 100%;
          height: 20px;
          background-color: #ddd;
          border-radius: 5px;
          margin: 10px 0;
        }

        .rating-fill {
          background-color: green;
          height: 100%;
          border-radius: 5px;
        }

        .rating-percentage {
          color: #00FF00;
          font-weight: bold;
        }

        .feedback-list {
          margin-top: 2em;
        }

        .feedback-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 10px;
        }

        .feedback-table th, .feedback-table td {
          padding: 10px;
          text-align: left;
          border: 1px solid #ddd;
        }

        .feedback-table th {
          background-color: #333;
          color: #00FF00;
        }

        .feedback-table td {
          background-color: #222;
          color: #00FF00;
        }

        .feedback-table tr:hover {
          background-color: #444;
        }

        .delete-button {
          padding: 5px 10px;
          background-color: red;
          color: white;
          border: none;
          cursor: pointer;
          border-radius: 5px;
        }

        .delete-button:hover {
          background-color: darkred;
        }
      `}</style>
    </div>
  );
}

export default Rating;
