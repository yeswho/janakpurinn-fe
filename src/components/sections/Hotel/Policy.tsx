
const Policies = () => {
  const policies = {
    title: "Hotel JanakpurInn Policies",
    checkInOut: {
      checkIn: "1:00 PM",
      checkOut: "12:00 PM"
    },
    sections: [
      {
        title: "SMOKING AND PROPERTY DAMAGE",
        content: "Only the restaurant and balcony area have designated smoking areas. Any harm brought on by smoking, as well as any careless harm to furniture or other items, shall incur the appropriate charges."
      },
      {
        title: "ALCOHOL",
        content: "Alcoholic beverage sales are only available to persons who are at least 21 years old (with valid identification). Visitors are not allowed to bring their own alcohol into the hotel to consume in their room. A corkage fee of Nrs.500 will be levied to any alcohol brought onto the property, and this is only permitted with prior arrangement."
      },
      {
        title: "AGE REQUIREMENT",
        content: "To reserve and check into a guestroom, visitors must be at least 18 years old and have valid government-issued identification."
      },
      {
        title: "OCCUPANCY AREA",
        content: "If there are more than 2 adults in a guest room, there will be an extra person fee. When using existing beds, one child under 8 years old stays free of charge. Each additional bed costs NPR 500 per night. One additional bed is the most that may be placed in a room. The room is not big enough to accommodate cots. Any kind of additional bed, child's cot, or crib must be requested in advance and agreed with management. Supplements must be paid for individually because they are not automatically included in the overall price."
      },
      {
        title: "PETS",
        content: "We allow pets inside the hotel room but some prior notification should be provided."
      },
      {
        title: "CANCELLATION",
        content: "Any payments made toward a deposit will be lost in the case of cancellation. If a reservation is canceled less than a day before the scheduled arrival date, we have the right to charge the full amount, especially during the busy months."
      },
      {
        title: "PARKING",
        content: "The proprietors do not accept any responsibility for loss or damage to any guest's vehicle or its contents whilst situated on the hotel grounds."
      },
      {
        title: "HAZARDOUS GOODS",
        content: "It is forbidden to bring items and/or store raw or exposed films, as well as any other articles that are flammable, dangerous, illegal, or otherwise undesirable. For any financial or other loss and damage that may occur from such items or as a consequence of the guest's own carelessness and disregard for any or all directions, the guest shall be fully accountable and responsible to the management, its other guests, invitees, visitors, agents and staff. On hotel property, it is against the law to gamble, carry illegal substances, engage in prostitution, or have firearms, explosives, combustible items, poisons, narcotics, animals, or strong-smelling food."
      },
      {
        title: "Management's Rights",
        content: "It is understood that the visitor would act respectably and not create any irritation or disturbance on the hotel property. The Management has the authority to ask any guest to leave their room or other hotel facilities immediately, without giving them any prior warning or explanation, and the visitor is obligated to comply with the order. The Management has the authority to remove the guest's bags and possessions from the room they are occupying in the event of a default."
      },
      {
        title: "Government rules and regulations and application of laws",
        content: "All applicable acts and laws as well as current government rules and regulations must be observed, adhered to, and agreed to by guests."
      },
      {
        title: "THE MANAGEMENT RESERVES THE RIGHT",
        content: "To add to, modify, or amend any of the terms, conditions, and rules listed above that are a component and an abstract of the lodging act."
      }
    ]
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-primary-50">
      <div className="max-w-4xl mx-auto">
        <div className="hotel-card p-8 mb-8">
          <h1 className="text-3xl font-serif font-semibold text-text-primary mb-2">
            Our Policy
          </h1>
          <h2 className="text-2xl font-serif text-accent-500 mb-6">
            {policies.title}
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8 p-4 bg-primary-100 rounded-lg">
            <div className="flex-1">
              <h3 className="font-medium text-text-primary">Check in:</h3>
              <p className="text-text-secondary">{policies.checkInOut.checkIn}</p>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-text-primary">Check out:</h3>
              <p className="text-text-secondary">{policies.checkInOut.checkOut}</p>
            </div>
          </div>

          <div className="space-y-8">
            {policies.sections.map((section, index) => (
              <div key={index} className="border-b border-gray-200/50 pb-6 last:border-0">
                <h3 className="text-xl font-serif font-semibold text-text-primary mb-3">
                  {section.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;