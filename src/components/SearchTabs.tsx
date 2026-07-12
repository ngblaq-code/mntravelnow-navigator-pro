import { useState } from "react";
import { Plane, Hotel, Car, Bus, Compass, ShieldCheck, Search } from "lucide-react";
import { AFFILIATE_LINK_ATTRS, getAffiliateLink, type AffiliateCategory } from "@/config/affiliates";
import { cn } from "@/lib/utils";

type Tab = { id: AffiliateCategory; label: string; icon: typeof Plane };

const TABS: Tab[] = [
  { id: "flights", label: "Flights", icon: Plane },
  { id: "hotels", label: "Hotels", icon: Hotel },
  { id: "cars", label: "Car Rentals", icon: Car },
  { id: "transfers", label: "Transfers", icon: Bus },
  { id: "tours", label: "Tours", icon: Compass },
  { id: "insurance", label: "Insurance", icon: ShieldCheck },
];

export function SearchTabs() {
  const [active, setActive] = useState<AffiliateCategory>("flights");

  return (
    <div className="bg-card rounded-2xl shadow-elevated border border-border overflow-hidden">
      <div className="flex overflow-x-auto scrollbar-none border-b border-border">
        {TABS.map((t) => {
          const Icon = t.icon;
          const isActive = active === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={cn(
                "flex items-center gap-2 px-4 md:px-5 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors shrink-0",
                isActive
                  ? "text-primary border-primary bg-primary/5"
                  : "text-muted-foreground border-transparent hover:text-foreground",
              )}
              aria-pressed={isActive}
            >
              <Icon className="h-4 w-4" />
              {t.label}
            </button>
          );
        })}
      </div>

      <form
        action={getAffiliateLink(active)}
        {...AFFILIATE_LINK_ATTRS}
        className="p-4 md:p-6 grid gap-3"
        onSubmit={(e) => {
          // Placeholder: opens the affiliate link in a new tab
          e.preventDefault();
          window.open(getAffiliateLink(active), "_blank", "noopener,noreferrer");
        }}
      >
        {active === "flights" && <FlightsForm />}
        {active === "hotels" && <HotelsForm />}
        {active === "cars" && <CarsForm />}
        {active === "transfers" && <TransfersForm />}
        {active === "tours" && <ToursForm />}
        {active === "insurance" && <InsuranceForm />}

        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-accent hover:brightness-110 text-accent-foreground font-semibold px-6 py-3 shadow-card transition"
        >
          <Search className="h-4 w-4" /> Search {TABS.find((t) => t.id === active)!.label}
        </button>
      </form>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{label}</span>
      {children}
    </label>
  );
}

const inputCls =
  "h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

function FlightsForm() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      <Field label="From"><input className={inputCls} placeholder="City or airport" defaultValue="New York (JFK)" /></Field>
      <Field label="To"><input className={inputCls} placeholder="City or airport" defaultValue="London (LHR)" /></Field>
      <Field label="Passengers">
        <select className={inputCls} defaultValue="1">
          {[1,2,3,4,5,6].map((n) => <option key={n}>{n} Adult{n>1?"s":""}</option>)}
        </select>
      </Field>
      <Field label="Departure"><input type="date" className={inputCls} /></Field>
      <Field label="Return"><input type="date" className={inputCls} /></Field>
      <Field label="Cabin Class">
        <select className={inputCls}>
          <option>Economy</option><option>Premium Economy</option><option>Business</option><option>First</option>
        </select>
      </Field>
    </div>
  );
}
function HotelsForm() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <Field label="Destination"><input className={inputCls} placeholder="City, region or hotel" defaultValue="Dubai" /></Field>
      <Field label="Check-in"><input type="date" className={inputCls} /></Field>
      <Field label="Check-out"><input type="date" className={inputCls} /></Field>
      <Field label="Guests & Rooms">
        <select className={inputCls}><option>2 guests, 1 room</option><option>1 guest, 1 room</option><option>3 guests, 1 room</option><option>4 guests, 2 rooms</option></select>
      </Field>
    </div>
  );
}
function CarsForm() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <Field label="Pick-up location"><input className={inputCls} placeholder="Airport or city" defaultValue="Dubai Airport" /></Field>
      <Field label="Pick-up date"><input type="date" className={inputCls} /></Field>
      <Field label="Drop-off date"><input type="date" className={inputCls} /></Field>
      <Field label="Driver age">
        <select className={inputCls}><option>25+</option><option>21–24</option><option>18–20</option></select>
      </Field>
    </div>
  );
}
function TransfersForm() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <Field label="From (airport)"><input className={inputCls} placeholder="e.g. DXB" defaultValue="DXB" /></Field>
      <Field label="To (destination)"><input className={inputCls} placeholder="Hotel or address" defaultValue="Downtown Dubai" /></Field>
      <Field label="Date & time"><input type="datetime-local" className={inputCls} /></Field>
      <Field label="Passengers"><select className={inputCls}>{[1,2,3,4,5,6,7,8].map((n)=><option key={n}>{n}</option>)}</select></Field>
    </div>
  );
}
function ToursForm() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      <Field label="Destination"><input className={inputCls} placeholder="City or attraction" defaultValue="Paris" /></Field>
      <Field label="Date"><input type="date" className={inputCls} /></Field>
      <Field label="Travelers"><select className={inputCls}>{[1,2,3,4,5,6].map((n)=><option key={n}>{n}</option>)}</select></Field>
    </div>
  );
}
function InsuranceForm() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <Field label="Destination"><input className={inputCls} placeholder="Country or region" defaultValue="Worldwide" /></Field>
      <Field label="Depart"><input type="date" className={inputCls} /></Field>
      <Field label="Return"><input type="date" className={inputCls} /></Field>
      <Field label="Travelers"><select className={inputCls}>{[1,2,3,4,5,6].map((n)=><option key={n}>{n}</option>)}</select></Field>
    </div>
  );
}
