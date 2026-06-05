import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

type Engine = { name: string; desc: string };

const CATEGORIES: { titleKey: string; engines: Engine[] }[] = [
  {
    titleKey: 'cat1' as const,
    engines: [
      { name: 'quantum_federation', desc: 'Multi-provider orchestration with cost-arbitrage and failover' },
      { name: 'distributed_quantum', desc: 'Multi-QPU orchestration with circuit cutting & knitting' },
      { name: 'quantum_cutting', desc: 'Wire / gate cutting (Peng 2019, Mitarai 2021)' },
    ],
  },
  {
    titleKey: 'cat2' as const,
    engines: [
      { name: 'quantum_access_router', desc: 'Hardware-aware routing, transpiled-circuit cache, error shielding' },
      { name: 'quantum_router_v2', desc: 'Enhanced router with extended provider matrix' },
      { name: 'quantum_router_v3', desc: 'Latest router: advantage detection + algorithm selection + warm start' },
      { name: 'ml_backend_selector', desc: 'Neural-network + RL backend prediction from execution history' },
      { name: 'quantum_algorithm_selector', desc: 'Auto-select QAOA / VQE / Grover / amplitude-estimation per problem' },
      { name: 'real_time_calibration', desc: 'Live calibration polling, qubit-quality prediction, optimal timing' },
      { name: 'quantum_advantage_detector', desc: 'Detects when a problem actually benefits from quantum' },
    ],
  },
  {
    titleKey: 'cat3' as const,
    engines: [
      { name: 'adaptive_error_mitigator', desc: 'Learning-based selection of ZNE / PEC / DD / twirling per circuit' },
      { name: 'advanced_noise_mitigation', desc: 'Composite noise-mitigation pipeline' },
      { name: 'quantum_error_correction', desc: 'Surface-code and related QEC primitives' },
      { name: 'pulse_optimizer', desc: 'Pulse-level control: GRAPE, CRAB, DRAG, cross-resonance' },
    ],
  },
  {
    titleKey: 'cat4' as const,
    engines: [
      { name: 'quantum_ml_engine', desc: 'QNN, QSVM, QBM with hyperparameter optimization' },
      { name: 'quantum_automl', desc: 'AutoML for quantum circuits (architecture + ansatz search)' },
      { name: 'quantum_explainability', desc: 'Interpretable QML: feature attribution, counterfactuals, decision boundaries' },
    ],
  },
  {
    titleKey: 'cat5' as const,
    engines: [
      { name: 'flow_vqe', desc: 'Flow-based Variational Quantum Eigensolver' },
      { name: 'hybrid_optimizer', desc: 'Hybrid quantum-classical optimization loop' },
      { name: 'qubo_optimizer', desc: 'QUBO matrix coefficient optimization' },
      { name: 'quantum_warm_starter', desc: 'Parameter caching & transfer between similar problems' },
      { name: 'quantum_circuit_synthesizer', desc: 'Automatic circuit synthesis from problem spec' },
      { name: 'constraint_encoder', desc: 'Efficient constraint encoding for quantum optimization' },
      { name: 'penalty_tuner', desc: 'Automatic penalty-coefficient tuning for QUBO constraints' },
      { name: 'problem_formulator', desc: 'Translation of business problems into quantum-solvable form' },
    ],
  },
  {
    titleKey: 'cat6' as const,
    engines: [
      { name: 'quantum_engine', desc: 'Unified interface over the full backend matrix' },
      { name: 'quantum_memory_manager', desc: 'Qubit allocation, pooling, ancilla management, garbage collection' },
      { name: 'quantum_telemetry', desc: 'Execution telemetry and analytics' },
      { name: 'simulation_engine', desc: 'Local simulation without API cost (Aer / Ket-MPS up to 100+ qubits)' },
      { name: 'financial_quantum_engine', desc: 'Domain engine: portfolio optimization, option pricing' },
      { name: 'backtesting_engine', desc: 'Quantum-enhanced strategy backtesting' },
    ],
  },
];

export default function ResearchEngines() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.05 });

  return (
    <section
      id="research-engines"
      ref={ref}
      className="py-24 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-50 border-t border-gray-200"
    >
      <div className={`max-w-7xl mx-auto w-full ${isVisible ? 'fade-in' : 'opacity-0'}`}>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900">
            {t.engines.title} <span className="font-semibold gradient-text">{t.engines.titleHighlight}</span>
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto glow-blue"></div>
          <p className="text-lg text-gray-700 font-light max-w-3xl mx-auto mt-6">
            {t.engines.description}
          </p>
          <p className="text-sm text-gray-500 font-light max-w-3xl mx-auto">
            {t.engines.caveat}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => {
            const catT = (t.engines as Record<string, { title: string; desc: string }>)[cat.titleKey];
            return (
              <Card
                key={cat.titleKey}
                className="p-6 border border-gray-200 hover:border-blue-500 transition-all duration-300 bg-white card-hover"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{catT.title}</h3>
                <p className="text-sm text-gray-600 font-light mb-4">{catT.desc}</p>
                <ul className="space-y-2">
                  {cat.engines.map((e) => (
                    <li key={e.name} className="text-sm">
                      <code className="text-blue-700 font-mono text-xs">{e.name}</code>
                      <p className="text-gray-600 font-light text-xs mt-0.5 leading-relaxed">{e.desc}</p>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
