import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Account, UpdateForm } from "../../components";

import "./Profile.scss";

export const accounts = [
  {
    id: "azerty47hg",
    name: "Argent Bank Checking (x8349)",
    amount: "$2,082.79",
    description: "Available Balance",
  },
  {
    id: "azerty48hg",
    name: "Argent Bank Savings (x6712)",
    amount: "$10,928.42",
    description: "Available Balance",
  },
  {
    id: "azerty49hg",
    name: "Argent Bank Credit Card (x8349)",
    amount: "$184.30",
    description: "Current Balance",
  },
];

const Profile = (state) => {
  const { firstName, lastName } = useSelector((state) => state.user);
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <main className="main bg-dark">
        <section className="header">
          <h1>
            Welcome back
            <br /> {firstName} {lastName}!
          </h1>

          {!showForm && (
            <button
              onClick={() => {
                setShowForm(true);
              }}
              className="edit-button"
            >
              Edit Name
            </button>
          )}
        </section>
        {showForm && (
          <section className="update-form">
            <UpdateForm onClose={() => setShowForm(false)} />
          </section>
        )}

        <section className="transaction">
          {accounts.map((account) => {
            return (
              <Account
                key={account.id}
                title={account.name}
                amount={account.amount}
                description={account.description}
              />
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Profile;
