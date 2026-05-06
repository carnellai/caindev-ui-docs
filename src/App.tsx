import { BrowserRouter, Routes, Route } from 'react-router'
import { Home } from './pages/Home'
import { ButtonPage } from './pages/docs/ButtonPage'
import { SwitchPage } from './pages/docs/SwitchPage'
import { CheckboxPage } from './pages/docs/CheckboxPage'
import { InputPage } from './pages/docs/InputPage'
import { DialogPage } from './pages/docs/DialogPage'
import { SelectPage } from './pages/docs/SelectPage'
import { TabsPage } from './pages/docs/TabsPage'
import { TooltipPage } from './pages/docs/TooltipPage'
import { MenuPage } from './pages/docs/MenuPage'
import { AccordionPage } from './pages/docs/AccordionPage'
import { SliderPage } from './pages/docs/SliderPage'
import { StreamingTextPage } from './pages/docs/StreamingTextPage'
import { MessageBubblePage } from './pages/docs/MessageBubblePage'
import { MessageThreadPage } from './pages/docs/MessageThreadPage'
import { ThinkingBlockPage } from './pages/docs/ThinkingBlockPage'
import { ToolCallCardPage } from './pages/docs/ToolCallCardPage'
import { CodeBlockPage } from './pages/docs/CodeBlockPage'
import { ApprovalCardPage } from './pages/docs/ApprovalCardPage'
import { AgentStepPage } from './pages/docs/AgentStepPage'
import { StructuredOutputPage } from './pages/docs/StructuredOutputPage'
import { PromptInputPage } from './pages/docs/PromptInputPage'
import { TraceTreePage } from './pages/docs/TraceTreePage'
import { EvalBadgePage } from './pages/docs/EvalBadgePage'
import { RunStatusBadgePage } from './pages/docs/RunStatusBadgePage'
import { TokenCostPage } from './pages/docs/TokenCostPage'
import { MetricCardPage } from './pages/docs/MetricCardPage'
import { StatDeltaPage } from './pages/docs/StatDeltaPage'
import { ScoreBarPage } from './pages/docs/ScoreBarPage'
import { SkeletonPage } from './pages/docs/SkeletonPage'
import { EmptyStatePage } from './pages/docs/EmptyStatePage'
import { CardPage } from './pages/docs/CardPage'
import { BadgePage } from './pages/docs/BadgePage'
import { SeparatorPage } from './pages/docs/SeparatorPage'
import { AlertPage } from './pages/docs/AlertPage'
import { TablePage } from './pages/docs/TablePage'
import { ToastPage } from './pages/docs/ToastPage'
import { FormPage } from './pages/docs/FormPage'
import { StackPage } from './pages/docs/StackPage'
import { GridPage } from './pages/docs/GridPage'
import { ContainerPage } from './pages/docs/ContainerPage'
import { SectionPage } from './pages/docs/SectionPage'
import { ProgressPage } from './pages/docs/ProgressPage'
import { DrawerPage } from './pages/docs/DrawerPage'
import { NumberFieldPage } from './pages/docs/NumberFieldPage'
import { ComboboxPage } from './pages/docs/ComboboxPage'
import { PaginationPage } from './pages/docs/PaginationPage'
import { CommandPalettePage } from './pages/docs/CommandPalettePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/docs/button' element={<ButtonPage />} />
        <Route path='/docs/switch' element={<SwitchPage />} />
        <Route path='/docs/checkbox' element={<CheckboxPage />} />
        <Route path='/docs/input' element={<InputPage />} />
        <Route path='/docs/dialog' element={<DialogPage />} />
        <Route path='/docs/select' element={<SelectPage />} />
        <Route path='/docs/tabs' element={<TabsPage />} />
        <Route path='/docs/tooltip' element={<TooltipPage />} />
        <Route path='/docs/menu' element={<MenuPage />} />
        <Route path='/docs/accordion' element={<AccordionPage />} />
        <Route path='/docs/slider' element={<SliderPage />} />
        <Route path='/docs/streaming-text' element={<StreamingTextPage />} />
        <Route path='/docs/message-bubble' element={<MessageBubblePage />} />
        <Route path='/docs/message-thread' element={<MessageThreadPage />} />
        <Route path='/docs/thinking-block' element={<ThinkingBlockPage />} />
        <Route path='/docs/tool-call-card' element={<ToolCallCardPage />} />
        <Route path='/docs/code-block' element={<CodeBlockPage />} />
        <Route path='/docs/approval-card' element={<ApprovalCardPage />} />
        <Route path='/docs/agent-step' element={<AgentStepPage />} />
        <Route
          path='/docs/structured-output'
          element={<StructuredOutputPage />}
        />
        <Route path='/docs/prompt-input' element={<PromptInputPage />} />
        <Route path='/docs/trace-tree' element={<TraceTreePage />} />
        <Route path='/docs/eval-badge' element={<EvalBadgePage />} />
        <Route path='/docs/run-status-badge' element={<RunStatusBadgePage />} />
        <Route path='/docs/token-cost' element={<TokenCostPage />} />
        <Route path='/docs/metric-card' element={<MetricCardPage />} />
        <Route path='/docs/stat-delta' element={<StatDeltaPage />} />
        <Route path='/docs/score-bar' element={<ScoreBarPage />} />
        <Route path='/docs/skeleton' element={<SkeletonPage />} />
        <Route path='/docs/empty-state' element={<EmptyStatePage />} />
        <Route path='/docs/card' element={<CardPage />} />
        <Route path='/docs/badge' element={<BadgePage />} />
        <Route path='/docs/separator' element={<SeparatorPage />} />
        <Route path='/docs/alert' element={<AlertPage />} />
        <Route path='/docs/table' element={<TablePage />} />
        <Route path='/docs/toast' element={<ToastPage />} />
        <Route path='/docs/form' element={<FormPage />} />
        <Route path='/docs/stack' element={<StackPage />} />
        <Route path='/docs/grid' element={<GridPage />} />
        <Route path='/docs/container' element={<ContainerPage />} />
        <Route path='/docs/section' element={<SectionPage />} />
        <Route path='/docs/progress' element={<ProgressPage />} />
        <Route path='/docs/drawer' element={<DrawerPage />} />
        <Route path='/docs/number-field' element={<NumberFieldPage />} />
        <Route path='/docs/combobox' element={<ComboboxPage />} />
        <Route path='/docs/pagination' element={<PaginationPage />} />
        <Route path='/docs/command-palette' element={<CommandPalettePage />} />
      </Routes>
    </BrowserRouter>
  )
}
